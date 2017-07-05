import React from 'react';
import ReactDOM from 'react-dom';
import store from 'reducers';
import 'normalize-css';
import 'ui/global';
import LanguageProvider from 'language/LanguageProvider';
import { Provider } from 'react-redux';
import { translationMessages } from 'language/i18n';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const render = messages =>
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <Router>
          <App />
        </Router>
      </LanguageProvider>
    </Provider>,
    document.getElementById('root')
  );

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/id.js'),
      ])
    )
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

registerServiceWorker();
