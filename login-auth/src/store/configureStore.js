// Root Reducer
import CombineReducers from './combineReducers';

// Utility Packages
import { createStore } from 'redux';


export const Store = createStore(CombineReducers);
