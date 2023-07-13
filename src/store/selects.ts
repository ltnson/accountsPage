import { RootState } from './store';

// Accounts
export const showFilterSelector = (state: RootState) =>
  state.accounts.showFilter;
export const showDetailSelector = (state: RootState) =>
  state.accounts.showDetail;
export const showUpdateSelector = (state: RootState) =>
  state.accounts.showUpdate;
export const showSidebarSelector = (state: RootState) =>
  state.accounts.showSidebar;
export const idDetailSelector = (state: RootState) => state.accounts.idDetail;
export const limitTabSelector = (state: RootState) => state.accounts.limitTab;
export const skipTabSelector = (state: RootState) => state.accounts.skipTab;
export const totalTabSelector = (state: RootState) => state.accounts.totalTab;
export const searchingSelector = (state: RootState) => state.accounts.searching;
export const allCheckboxSelector = (state: RootState) =>
  state.accounts.allCheckbox;
export const searchResultSelector = (state: RootState) =>
  state.accounts.searchResults;

//TodoQuery
export const todoQueryEditDataSelector = (state: RootState) =>
  state.todoQuery.editForm;
export const showEditedQuerySelector = (state: RootState) =>
  state.todoQuery.showEditedForm;
export const idQueryEditSelector = (state: RootState) =>
  state.todoQuery.idTodoEdit;

//TodoAxios
export const todoAxiosEditDataSelector = (state: RootState) =>
  state.todoAxios.editForm;
export const showEditedAxiosSelector = (state: RootState) =>
  state.todoAxios.showEditedForm;
export const idAxiosEditSelector = (state: RootState) =>
  state.todoAxios.idTodoEdit;
export const reloadTodoSelector = (state: RootState) =>
  state.todoAxios.reloadTodo;

//TodoQueryCart
export const todoQueryCartEditDataSelector = (state: RootState) =>
  state.todoQueryCart.editForm;
export const showEditedQueryCartSelector = (state: RootState) =>
  state.todoQueryCart.showEditedForm;
export const idQueryCartEditSelector = (state: RootState) =>
  state.todoQueryCart.idTodoEdit;

//set detail data
export const todoDetailDataSelector = (state: RootState) =>
  state.todoQueryCart.detalData;

export const showTodoDetailSelector = (state: RootState) =>
  state.todoQueryCart.shoDetail;
