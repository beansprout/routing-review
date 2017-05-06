import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA';
export const ADD_DATA = 'ADD_DATA';

export const fetchData = () => {
  const promise = axios.get('http://localhost:5000/list');
  return {
    type: FETCH_DATA,
    payload: promise,
  };
};

export const addData = ( formData, id ) => {
  const promise = axios.post('http://localhost:5000/new-item', formData);
  return {
    type: ADD_DATA,
    payload: promise,
  };
};