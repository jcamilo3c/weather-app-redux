import {createStore} from 'redux';
import {city} from './../reducers/city';

const initialState = {city: 'Bogota,co'};

export const store = createStore(city, initialState, // Reducer (function) - 1st parameter
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
