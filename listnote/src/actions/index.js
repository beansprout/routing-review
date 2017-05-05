import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => {
  const promise = axios.get('http://localhost:5000/items');
  return {
    type: FETCH_DATA,
    payload: promise,
  }
}

export const ADD_DATA = 'ADD_DATA';

export const addData = ( formData ) => {
  const promise = axios.post('http://localhost:5000/', {  formData});
  return {
    type: ADD_DATA,
    payload: promise,
  }
}