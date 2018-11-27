import {createStore} from 'redux';

export const store = createStore(() => {}, // Reducer (function)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
