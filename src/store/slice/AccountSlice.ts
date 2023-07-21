import { createSlice } from '@reduxjs/toolkit';
import { AccountSlice } from '../../model/types';

const initialState: AccountSlice = {
  showUpdate: false,
  showDetail: false,
  showSidebar: false,
  showFilter: false,
  idDetail: 0,
  allCheckbox: false,
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: initialState,
  reducers: {
    setAllCheckbox: (state, action: { type: string; payload: boolean }) => {
      state.allCheckbox = action.payload;
    },
    setIdDetail: (state, action: { type: string; payload: number }) => {
      state.idDetail = action.payload;
    },
    setShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    setShowDetail: (state) => {
      state.showDetail = !state.showDetail;
    },
    setShowUpdate: (state) => {
      state.showUpdate = !state.showUpdate;
    },
    setShowFilter: (state) => {
      state.showFilter = !state.showFilter;
    },
  },
});
