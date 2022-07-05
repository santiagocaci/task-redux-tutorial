import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task 1 description',
    completed: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task 2 description',
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.push(payload);
    },
    deleteTask: (state, { payload }) => {
      const taskFound = state.find((task) => task.id === payload);
      if (taskFound) {
        state = state.splice(state.indexOf(taskFound), 1);
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const taskFound = state.find((task) => task.id === id);
      if (taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
