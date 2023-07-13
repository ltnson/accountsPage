import { createSlice } from '@reduxjs/toolkit';
import { TodoAxiosSlice, EditTodo } from '../../model/types';

const initialState: TodoAxiosSlice = {
  editForm: {
    text: '',
    complete: false,
    author: '',
  },
  showEditedForm: false,
  idTodoEdit: 'New',
  reloadTodo: false,
};

export const todoAxiosSlice = createSlice({
  name: 'todoAxios',
  initialState: initialState,
  reducers: {
    setEditFormAxios: (state, action: { type: string; payload: EditTodo }) => {
      state.editForm = action.payload;
    },
    resetEditFormAxios: (state) => {
      state.editForm = initialState.editForm;
      state.idTodoEdit = 'New';
      state.showEditedForm = false;
    },
    setShowEditedFormAxios: (
      state,
      action: { type: string; payload: boolean },
    ) => {
      state.showEditedForm = action.payload;
    },
    setIdTodoEditAxios: (state, action) => {
      state.idTodoEdit = action.payload;
    },
    setReloadTodo: (state, action: { type: string; payload: boolean }) => {
      state.reloadTodo = action.payload;
    },
  },
});
