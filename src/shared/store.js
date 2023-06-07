import { configureStore } from '@reduxjs/toolkit';
import { initApi } from '../client/clientApi';
import reducers from './store/reducers';

initApi();

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
