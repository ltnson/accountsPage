import { createSlice } from '@reduxjs/toolkit';
import { TodoQuerySlice } from '../../model/types';

const initialState: TodoQuerySlice = {
  editForm: {
    text: '',
    complete: false,
    author: '',
  },
  showEditedForm: false,
  idTodoEdit: 'New',
};

export const todoQuerySlice = createSlice({
  name: 'todoQuery',
  initialState: initialState,
  reducers: {
    setEditFormQuery: (state, action) => {
      state.editForm = action.payload;
    },
    resetEditFormQuery: (state) => {
      state.editForm = initialState.editForm;
    },
    setShowEditedFormQuery: (state, action) => {
      state.showEditedForm = action.payload;
    },
    setIdTodoEditQuery: (state, action) => {
      state.idTodoEdit = action.payload;
    },
  },
});
