import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

import { loadState, saveState } from '../services/SaveLocal';

const persistedState = loadState();

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    user: store.getState().user,
  });
});

export default store;
