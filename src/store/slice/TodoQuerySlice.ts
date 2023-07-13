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
    setEditForm: (state, action) => {
      state.editForm = action.payload;
    },
    resetEditForm: (state) => {
      state.editForm = initialState.editForm;
    },
    setShowEditedForm: (state, action) => {
      state.showEditedForm = action.payload;
    },
    setIdTodoEdit: (state, action) => {
      state.idTodoEdit = action.payload;
    },
  },
});
