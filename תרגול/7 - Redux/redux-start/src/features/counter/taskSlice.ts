import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  text: string,
  id: string
}

export interface TaskState {
  value: Array<Task>
}

const initialState: TaskState = {
  value: [{ text: "First task", id: uuidv4() }]
}

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, { text: action.payload, id: uuidv4() }]
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(item => item.id !== action.payload)
    },
    updateTask: (state, action: PayloadAction<any>) => {
      state.value = state.value.map(item => item.id === action.payload.id ? { ...item, text: action.payload.newText } : item)
    }
  }
})

export const selectTask = (state: RootState) => state.task.value

export const { addNewTask, removeTask, updateTask } = taskSlice.actions;


export default taskSlice.reducer;
