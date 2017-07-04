import {
  combineReducers,
} from 'redux-immutable';

import {
  createStore,
} from 'redux';

import appReducer from 'containers/App/reducers';

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;