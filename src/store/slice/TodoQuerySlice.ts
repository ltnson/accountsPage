import { createSlice } from '@reduxjs/toolkit';
import { EditTodo, TodoQuerySlice } from '../../model/types';

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
    setEditFormQuery: (state, action: { type: string; payload: EditTodo }) => {
      state.editForm = action.payload;
    },
    resetEditFormQuery: (state) => {
      state.editForm = initialState.editForm;
      state.idTodoEdit = 'New';
      state.showEditedForm = false;
    },
    setShowEditedFormQuery: (
      state,
      action: { type: string; payload: boolean },
    ) => {
      state.showEditedForm = action.payload;
    },
    setIdTodoEditQuery: (state, action: { type: string; payload: string }) => {
      state.idTodoEdit = action.payload;
    },
  },
});
