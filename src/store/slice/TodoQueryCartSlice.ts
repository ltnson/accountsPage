import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setDetailData: (state, action) => {
      state.detalData = action.payload;
    },
    setShowDetail: (state, action) => {
      state.shoDetail = action.payload;
    },
  },
});
