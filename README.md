
# Reddit Clone V1

A reddit clone web app where users are able to view and submit topics, and upvote or downvote them.

<img src="https://travis-ci.org/jonathanlie94/reddit-clone-v1.svg?branch=master" alt="build:passed">

Check out the app live [here](http://reddit-clone-v1.herokuapp.com/).

----------
## Quick Start

node version: 6.11.0
npm version: 3.10.10

Clone the repo and run the following commands:
```
npm install
npm start
```
You should be automatically redirected to [localhost:8000](http://localhost:8000).


----------
## Setup

[Create React App](https://github.com/facebookincubator/create-react-app) was used to generate a runnable React project from the get-go. The project was then immediately ejected, since the project is more customizable that way and it more accurately represents real world React apps nowadays.
The ejected app has a lot of things setup from the get-go: development workflow, build script, polyfills, CSS autoprefixer, default lint rules, and many others, therefore it was a great starting point for a new React app.

The root folder contains the following files/folders:

 - *config/*: contains config files for webpack, polyfills, jest, etc. created by create-react-app
 - *public/*: the public folder, contains html, images, etc
 - *scripts/*: scripts to start, build, and test the project, created by create-react-app
 - *src/*: where most of the development happen, contains the actual app code
 - *.eslintrc.js*: contains some rules that I chose to customize over existing rules
 - *.travis.yml*: configuration for Travis
 - *.gitignore*: files/folders ignored by git
 - *Procfile*: script executed upon deploying to Heroku
 - *server.js*: a quick Express server to listen to PORT and redirect all requests to /index.html

The files that are last created through the following commit message are not touched by me at all:
```
"Initial React app ejected from create-react-app"
```
Some changes to the webpack config were made to suit the project's folder structure and needs, such as enabling absolute path imports.

[prettier](https://github.com/prettier/prettier) is used to format the code.

Then CI was setup in [Travis](https://travis-ci.org/jonathanlie94/reddit-clone-v1), with automatic deployment to Heroku if build passes.

There are several scripts inside package.json, and they do these things:

- *start*: Start up development server
- *build*: Create optimized build to /build
- *test*: Run tests
- *test-watch*: Watch mode for test files
- *prettier*: Run prettier on all files
- *extract-i18n*: Extract all defined messages to locale translations file, explained later in i18n section
- *postinstall*: Automatically run after postinstall (used in Heroku to auto build, even though it is also run locally after first install)

----------
## App functionality

There are multiple routes accessible from the application:
*/* - The home page
*/topics/:id* - Loads a topic detail. If id is not found, the topic container will just display nothing.
*/topics/submit* - Submit a new topic
Any other routes will render a "Page not found".

Here are the assumptions I made about the app functionalities:

 - A user can upvote or downvote a topic, submit a new topic, view a topic's details, or view the list of topics, paginated at 20 per page.
 - A topic contains a title and description, where title is required, but description is not. Vote will start at 0 for a new topic.
 - A topic cannot be edited or deleted by anyone, since there is no user authentication.

----------
## Design decisions

### Why React
I decided to use React because I have about 1.5 years of experience using it and have been quite comfortable with the framework.

### Page Layout
I decided to not use a CSS framework and went with simple responsive CSS for the page. The app is divided into different sections.

|	<span>				|  <span>				|
|	:---------------	|	----------------:	|
|	Header				|							|
|	MainContainer	|	SideContainer	|
|	Footer				|	<span>				|
|	<span>				|	<span>				|

SideContainer will shift to the bottom, just above footer, if the screen size goes to tablet screen size.

### Code Splitting
For this app, the logic of code splitting is such that as the imported component is being loaded through the network, a fallback component is rendered. The related file is located at */src/components/AsyncComponent/index.js*.

### In-memory Data
I decided to use [Redux](https://github.com/reactjs/react-redux), coupled with [ImmutableJS](https://github.com/facebook/immutable-js) for predictability, for the data and state management.
I don't mind learning new libraries, as before using Redux I have also used a flux library (Reflux) before for quite some time and the core concept of uni-directional flow of data is similar, but I have decided to stick to a library I'm better at using.
A *sampleDataManager.js* mocks a backend and stores all of the topics, and any request made by actions concerning topics (upvote/downvote, fetch, create) all go through this data manager.
There is also a slight delay in each action that makes requests to the data manager, in order to mock the behavior of a real-world network call.

The usage of ImmutableJS, as its name suggests, is to enforce immutability on our data. My decision was such that any data in between actions until components should be in ImmutableJS form. Meaning to say, any data fetched should be first converted to ImmutableJS data format, and passed around components as an ImmutableJS data format as well (with the exception of primitives).

Even though this resulted in longer codes, it helps a lot in making sense of what data the reducers hold. Handling actions also become harder, as we cannot use ES6 features such as spread operator, but it is worth implementing in my opinion.

Let's go through each reducer quickly:

#### appReducer
The global state of our app. It store map of previously loaded topics, a loading flag, and error flag. Loading and error are not used in this app right now, but it can be used to display spinners or global error messages such as to warn users if their network is disconnected.

A possible improvement here is to split the reducers into different reducers depending on the entities used in our application, which is **topics** in our case. That way, when the app scales, the *appReducer* is not cluttered.

#### homePageReducer
The reducer for home page (route "/"). Contains meta, and topicIds. The topicIds determine what items to display on the page.

#### submitPageReducer
The reducer for submit page. Stores the form state, loading and error. Loading and error are propagated to the rendered component to disable or enable interactions and provide information on errors.

#### topicsPageReducer
The reducer for topics page. Only contains the selected topic id to be rendered on the page.

#### languageReducer
The reducer that stores which locale the browser is currently using.


### Components Structure
I divided my React components into 2 distinct categories: *components* (dumb components) and *containers* (smart components).

*Components* are mostly components that only care about what to display, without involving any logic or connection to our data stores.

A typical single component folder content looks like this:

 - *tests/*: Tests for the component
 - *index.js*: Entry point of the component
 - *messages.js*: Messages defined for i18n

*Containers* mostly connect to reducers and control the flow and logic of the application. They are mostly the pages (such as HomePage, SubmitPage, etc.)

A typical single containers folder content looks like this:

 - *tests/*: Tests for the containers
 - *index.js*: Entry point of the container
 - *actions.js*: Actions scoped to the container
 - *constants.js*: Action types for the actions
 - *reducers.js*: Reducers scoped to the container
 - *messages.js*: Messages defined for i18n

 I decided to use component-container structure because it becomes easy to think about what a component should do, and the concept of reusable components come through naturally. By letting the containers do all the logic, we can try making components a pure as possible.

### CSS
I had a choice to use BEM structure, CSS modules, or styled-components.
In the end, I decided to use [styled-components](https://github.com/styled-components/styled-components) and really liked it as they enable a clear separation of CSS and React components, resulting in code that are easier to read. Now we do not need to care about classnames anymore.

You might notice that there is still css-loader package installed by create-react-app, and the webpack build config still processes any CSS file. These are still useful if we want to introduce an external CSS file to load to the project later on.

#### UI

- */src/ui/global.js* - Global CSS injected at the entry point of the app
- */src/ui/helpers.js* - Reusable CSS and media query -> see example usage in SideContainer, pretty neat :D
- */src/ui/theme.js* -  Global definitions for colors, margins, fontSizes


### Internationalization
I used [React-Intl](https://github.com/yahoo/react-intl) for i18n. There were some scripts from [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) that are quite useful, so those scripts were copied and modified too. They are:

 - */src/language/extract-i18n.js*: Running this script extracts any message definition throughout the project and groups them inside */src/language/translations/LOCALE.json* . All default translations are put in the default locale file, for example en.json / id.json. Then we have to translate the empty translations manually.
 - */src/language/i18n.js*: Initializes localeData into the browser and exports translations.

### Testing
Tests were written for most of the components, some utils, and the App actions and reducers.
[Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://github.com/facebook/jest) are used for the tests. [jest-styled-components](https://github.com/styled-components) also helped in testing components that are wrapped in a Styled Component, as well as snapshot testing for components. Check the tests out inside */tests* folder of each individual folder.
[redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) is used to mock stores when testing actions.
Do note that some of the files do not have tests yet, especially *containers*, as such there are many improvements that can be done to make the tests more robust in the future.



----------
## Conclusion

I tried many new libraries during this project and honestly had fun with it. React Router v4 introduced new concept that enables routes to be matched as components are rendered, and I find that really cool. I never used ImmutableJS in production before, but I think that it is probably the way to go in developing React apps with Redux. I did not manage to complete all the tests, but I would love to explore more on it in the future.

Even though a nice webpage design is not needed, I feel that in order to showcase good practices on developing web apps in general, some degree of aesthetics and responsiveness is needed, which is why I took further steps to build a better looking website. It also proves how maintainable a code base is as it resembles a real-world app more closely in my opinion.

There are still many things that can be improved upon!
