import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import listReducer from './listReducer';

const rootReducer = combineReducers({
   list: listReducer,
   form: formReducer,
});

export default rootReducer;