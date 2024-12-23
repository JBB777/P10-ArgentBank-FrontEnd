import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    profil: userSlice,
  },
});

export default store;
