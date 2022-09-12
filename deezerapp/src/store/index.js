import { configureStore } from '@reduxjs/toolkit';
import artistReducer from '../appSlice/artistSlice';

export const store = configureStore({
  reducer: artistReducer,
});