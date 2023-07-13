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
    setEditFormAxios: (state, action) => {
      state.editForm = action.payload;
    },
    resetEditFormAxios: (state) => {
      state.editForm = initialState.editForm;
    },
    setShowEditedFormAxios: (state, action) => {
      state.showEditedForm = action.payload;
    },
    setIdTodoEditAxios: (state, action) => {
      state.idTodoEdit = action.payload;
    },
  },
});
