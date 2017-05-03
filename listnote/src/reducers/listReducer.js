import { FETCH_DATA } from '../actions';

export default (state = [{actionName:'hi'}], action) => {
   console.log('action.payload: ', action.payload);
  switch (action.type) {
    case (FETCH_DATA):
      // return action.payload.data;
      return state;
    default:
      return state;
  }
}