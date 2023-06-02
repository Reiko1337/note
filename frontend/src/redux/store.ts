import { configureStore } from '@reduxjs/toolkit';
import note from './slices/noteSlice';
import user from './slices/userSlice';
import message from './slices/messageSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    note,
    user,
    message,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
