import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      // if (action.payload > -1 && action.payload < state.todos.length) {
      //   state.todos.splice(action.payload, 1);
      // }
    },
    toggleCompletedTodo(state, action) {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, toggleCompletedTodo, removeTodo } = todoSlice.actions;