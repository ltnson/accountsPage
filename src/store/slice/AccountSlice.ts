import { createSlice } from '@reduxjs/toolkit';
import { AccountSlice } from '../../model/types';

const initialState: AccountSlice = {
  showUpdate: false,
  showDetail: false,
  showSidebar: false,
  showFilter: false,
  totalTab: 100,
  limitTab: 10,
  skipTab: 0,
  idDetail: 0,
  searchResults: 0,
  searching: false,
  allCheckbox: false,
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: initialState,
  reducers: {
    setSkipTab: (state, action: { type: string; payload: number }) => {
      state.skipTab = action.payload;
    },
    setTotalTab: (state, action: { type: string; payload: number }) => {
      state.totalTab = action.payload;
    },
    setLimitTab: (state, action: { type: string; payload: number }) => {
      state.limitTab = action.payload;
    },
    setSearching: (state, action: { type: string; payload: boolean }) => {
      state.searching = action.payload;
    },
    setAllCheckbox: (state, action: { type: string; payload: boolean }) => {
      state.allCheckbox = action.payload;
    },
    setIdDetail: (state, action: { type: string; payload: number }) => {
      state.idDetail = action.payload;
    },
    setSearchResult: (state, action: { type: string; payload: number }) => {
      state.searchResults = action.payload;
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
