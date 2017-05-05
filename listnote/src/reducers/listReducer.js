import {
  FETCH_DATA,
  ADD_DATA
} from '../actions';

export default (state = [{ actionName: 'open', actionObject: 'file', actionWhere: 'finder' }], action) => {
  switch (action.type) {
    case (FETCH_DATA):
      return action.payload.data;
    case (ADD_DATA):
      return action.payload.data;
    default:
      return state;
  }
}
