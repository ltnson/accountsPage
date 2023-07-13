import { createSlice } from '@reduxjs/toolkit';
import { EditTodo, TodoQueryCartSlice, Todo } from '../../model/types';

const initialState: TodoQueryCartSlice = {
  editForm: {
    text: '',
    complete: false,
    author: '',
  },
  showEditedForm: false,
  idTodoEdit: 'New',
  detalData: {
    _id: '',
    text: '',
    complete: false,
    author: '',
    createdDate: '',
  },
  shoDetail: false,
};

export const todoQueryCartSlice = createSlice({
  name: 'todoQueryCart',
  initialState: initialState,
  reducers: {
    setEditFormQueryCart: (
      state,
      action: { type: string; payload: EditTodo },
    ) => {
      state.editForm = action.payload;
    },
    resetEditFormQueryCart: (state) => {
      state.editForm = initialState.editForm;
      state.idTodoEdit = 'New';
      state.showEditedForm = false;
    },
    setShowEditedFormQueryCart: (
      state,
      action: { type: string; payload: boolean },
    ) => {
      state.showEditedForm = action.payload;
    },
    setIdTodoEditQueryCart: (
      state,
      action: { type: string; payload: string },
    ) => {
      state.idTodoEdit = action.payload;
    },
    setDetailData: (state, action: { type: string; payload: Todo }) => {
      state.detalData = action.payload;
    },
    setShowDetail: (state, action: { type: string; payload: boolean }) => {
      state.shoDetail = action.payload;
    },
  },
});
