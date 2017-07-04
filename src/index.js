import React from 'react';
import ReactDOM from 'react-dom';
import store from 'reducers';
import 'normalize-css';
import 'ui/global';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { translationMessages } from 'language/i18n';

const render = messages =>
  ReactDOM.render(
    <Provider store={store}>
      <App messages={messages} />
    </Provider>,
    document.getElementById('root')
  );

registerServiceWorker();
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
