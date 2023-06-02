import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Note from '../../components/Note';
import { Task } from './taskSlice';
import axios from 'axios';
import { RootState } from '../store';

export const fetchNote = createAsyncThunk<Note[]>('note/fetchNoteStatus', async () => {
  const { data } = await axios.get<Note[]>('http://127.0.0.1:8000/api/v1/noted/', {
    headers: {
      Authorization: 'Token a1de4947b0dfe01fc6c1ef67ef4965a6f2342725',
    },
  });
  return data;
});

type Note = {
  id: number;
  title: string;
  creation_date: string;
  tasks: Task[];
};

interface NoteSliceState {
  items: Note[];
}

const initialState: NoteSliceState = {
  items: [],
};

const noteSlicec = createSlice({
  name: 'note',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNote.pending, (state, action) => {
      state.items = [];
    });
    builder.addCase(fetchNote.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(fetchNote.rejected, (state, action) => {
      state.items = [];
    });
  },
});

export const selectNote = (state: RootState) => state.note.items;

export const {} = noteSlicec.actions;

export default noteSlicec.reducer;
