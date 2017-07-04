import { combineReducers } from 'redux-immutable';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import appReducer from 'containers/App/reducers';
import languageReducer from 'language/LanguageProvider/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  language: languageReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
