// Root Reducer
import CombineReducers from './combineReducers';

// Utility Packages
import { createStore } from 'redux';

/*************************/
/****** Imports End ******/
/*************************/

export const Store = createStore(CombineReducers);
