import {
  FETCH_DATA,
  ADD_DATA
} from '../actions';

export default ( state=[formData], action) => {
  // console.log('action.payload: ', action.payload);
  switch (action.type) {
    case (FETCH_DATA):
      return action.payload.data;
      return ;
    case (ADD_DATA):
      return action.payload.data;
    default:
      return state;
  }
}
