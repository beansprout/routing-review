import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import listReducer from './listReducer';

const rootReducer = combineReducers({
   list: listReducer,
   listForm: formReducer,
});

export default rootReducer;