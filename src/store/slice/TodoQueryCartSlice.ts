import { createSlice } from '@reduxjs/toolkit';
import { TodoQueryCartSlice } from '../../model/types';

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
    setEditFormQueryCart: (state, action) => {
      state.editForm = action.payload;
    },
    resetEditFormQueryCart: (state) => {
      state.editForm = initialState.editForm;
    },
    setShowEditedFormQueryCart: (state, action) => {
      state.showEditedForm = action.payload;
    },
    setIdTodoEditQueryCart: (state, action) => {
      state.idTodoEdit = action.payload;
    },
    setDetailData: (state, action) => {
      state.detalData = action.payload;
    },
    setShowDetail: (state, action) => {
      state.shoDetail = action.payload;
    },
  },
});
