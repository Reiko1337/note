import { createSlice } from '@reduxjs/toolkit';
import Note from '../../components/Note';

export type Task = {
  id: number;
  text: string;
  id_done: boolean;
  creation_date: string;
};

interface TaskSliceState {
    items: Task[];
  }

const initialState:TaskSliceState = {
  items: [],
};

const TaskSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
});

export const {} = TaskSlice.actions;

export default TaskSlice.reducer;
