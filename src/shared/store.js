import { configureStore } from '@reduxjs/toolkit';
import { initApi } from '../client/clientApi';

initApi();

const store = configureStore({
  reducer: {},
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
