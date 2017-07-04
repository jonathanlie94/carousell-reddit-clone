import React from 'react';
import ReactDOM from 'react-dom';
import store from 'reducers';
import 'normalize-css';
import 'ui/global';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
