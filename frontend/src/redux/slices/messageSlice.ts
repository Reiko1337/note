import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface messageSliceState {
  isMessage: boolean;
  typeMessage: string;
  message: string;
}

const initialState: messageSliceState = {
  isMessage: false,
  typeMessage: '',
  message: '',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<messageSliceState>) {
      state.isMessage = action.payload.isMessage;
      state.typeMessage = action.payload.typeMessage;
      state.message = action.payload.message;
    },
    clearIsMessage(state) {
      state.isMessage = false;
      state.typeMessage = '';
      state.message = '';
    },
  },
});

export const selectMessage = (state: RootState) => state.message;

export const { setMessage, clearIsMessage } = messageSlice.actions;

export default messageSlice.reducer;
