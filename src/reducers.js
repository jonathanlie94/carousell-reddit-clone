import Immutable, { combineReducers } from 'redux-immutable';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import appReducer from 'containers/App/reducers';
import languageReducer from 'language/LanguageProvider/reducers';
import homePageReducer from 'containers/HomePage/reducers';
import topicsPageReducer from 'containers/TopicsPage/reducers';
import submitPageReducer from 'containers/SubmitPage/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  language: languageReducer,
  homePage: homePageReducer,
  topicsPage: topicsPageReducer,
  submitPage: submitPageReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      serialize: {
        immutable: Immutable,
      },
    }),
  applyMiddleware(thunk)
);

export default store;
