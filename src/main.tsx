import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme/MUIthemeCSS.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Provider } from 'react-redux';
import store from './store/store.ts';

dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(isBetweenPlugin);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <App />
          </LocalizationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
