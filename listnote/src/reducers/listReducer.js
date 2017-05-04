import {
  FETCH_DATA,
  ADD_DATA
} from '../actions';

export default (state = [{ actionName: 'open', actionObject: 'file', actionWhere: 'finder' }], action) => {
  // console.log('action.payload: ', action.payload);
  switch (action.type) {
    case (FETCH_DATA):
      // return action.payload.data;
      return state;
    case (ADD_DATA):
      return action.payload.data;
    default:
      return state;
  }
}
