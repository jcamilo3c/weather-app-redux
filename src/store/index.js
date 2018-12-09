import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {city: 'Bogota,co'};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk))); // Reducer (function) - 1st parameter
