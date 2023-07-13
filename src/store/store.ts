import { configureStore } from '@reduxjs/toolkit';
import { accountsSlice } from './slice/AccountSlice';
import { todoQuerySlice } from './slice/TodoQuerySlice';
import { todoAxiosSlice } from './slice/TodoAxiosSlice';
import { todoQueryCartSlice } from './slice/TodoQueryCartSlice';

const store = configureStore({
  reducer: {
    accounts: accountsSlice.reducer,
    todoQuery: todoQuerySlice.reducer,
    todoAxios: todoAxiosSlice.reducer,
    todoQueryCart: todoQueryCartSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
