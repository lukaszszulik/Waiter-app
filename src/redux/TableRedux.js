import shortid from 'shortid';
import { API_URL } from '../config';

//selectors
export const getAllTables = ({ tables }) => tables;

export const getTablesById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const ADD_TABLE = createActionName('ADD_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE = createActionName('UPDATE');

// action creators
export const addTable = (payload) => ({ type: ADD_TABLE, payload });
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const update = (payload) => ({ type: UPDATE, payload });

export const fetchTables = () => {
  return (dispatch) => {
  fetch(`${API_URL}/tables`)
    .then((res) => res.json())
    .then(tables => dispatch(updateTables(tables)));
}};

export const updateTableValues = (newValues) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newValues }),
    };

    fetch(`${API_URL}/tables/${newValues.id}`, options).then(() =>
      dispatch(update(newValues))
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...statePart, { ...action.payload, id: shortid() }];
    case UPDATE_TABLES:
      return [...action.payload];
    case UPDATE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );

    // return statePart.map((table) => table.id === action.payload);
    default:
      return statePart;
  }
};
export default tablesReducer;