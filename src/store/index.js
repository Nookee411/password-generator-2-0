import { configureStore } from '@reduxjs/toolkit';
import passwordSlice from './slices/PasswordSlice';

const store = configureStore({
  reducer: passwordSlice.reducer,
});

export default store;
