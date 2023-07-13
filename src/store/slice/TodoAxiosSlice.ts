import { createSlice } from '@reduxjs/toolkit';
import { TodoAxiosSlice } from '../../model/types';

const initialState: TodoAxiosSlice = {
  editForm: {
    text: '',
    complete: false,
    author: '',
  },
  showEditedForm: false,
  idTodoEdit: 'New',
};

export const todoAxiosSlice = createSlice({
  name: 'todoAxios',
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
