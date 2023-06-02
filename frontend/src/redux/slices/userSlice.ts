import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { RootState } from '../store';

export const fetchUserLogin = createAsyncThunk<
  UserSliceState,
  UserLoginRequest,
  { rejectValue: string }
>('user/fetchUserLogin', async (loginData, { rejectWithValue }) => {
  try {
    const response = await axios.post<UserSliceState>(
      'http://127.0.0.1:8000/api/v1/auth-token/token/login/',
      loginData,
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchUserReg = createAsyncThunk<void, UserRegRequest, { rejectValue: string }>(
  'user/fetchUserReg',
  async (regData, { rejectWithValue }) => {
    try {
      const response = await axios.post<UserRegRequest>(
        'http://127.0.0.1:8000/api/v1/auth/users/',
        regData,
      );
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export interface UserLoginRequest {
  username: string;
  password: string;
}

export interface UserRegRequest {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  re_password: string;
}
export type IsRedirect = {
  status: boolean;
  message: string;
};

interface UserSliceState {
  auth_token: string;
  error: any;
  is_redirect: IsRedirect;
}

const initialState: UserSliceState = {
  auth_token: '',
  error: '',
  is_redirect: {
    status: false,
    message: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearIsRedirect(state) {
      state.is_redirect = {
        status: false,
        message: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserLogin.pending, (state, action) => {
      state.auth_token = '';
      state.error = '';
    });
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.auth_token = action.payload.auth_token;
      state.error = '';
    });
    builder.addCase(fetchUserLogin.rejected, (state, action) => {
      const errorMessage = Object.values(action.payload ? action.payload : '').reduce(
        (accumulator, currentValue) => {
          if (Array.isArray(currentValue)) {
            currentValue.forEach((error) => {
              accumulator += error + ' ';
            });
          }
          return accumulator;
        },
        '',
      );
      state.error = errorMessage;
    });

    builder.addCase(fetchUserReg.pending, (state, action) => {
      state.auth_token = '';
      state.error = '';
    });
    builder.addCase(fetchUserReg.fulfilled, (state, action) => {
      state.error = '';
      state.is_redirect = {
        status: true,
        message: 'Вы успешно зарегистрировались.',
      };
    });
    builder.addCase(fetchUserReg.rejected, (state, action) => {
      const errorMessage = Object.values(action.payload ? action.payload : '').reduce(
        (accumulator, currentValue) => {
          if (Array.isArray(currentValue)) {
            currentValue.forEach((error) => {
              accumulator += error + ' ';
            });
          }
          return accumulator;
        },
        '',
      );
      state.error = errorMessage;
    });
  },
});

export const selectUser = (state: RootState) => state.user;

export const { clearIsRedirect } = userSlice.actions;

export default userSlice.reducer;
