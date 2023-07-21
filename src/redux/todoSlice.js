import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        updateTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload.id);
            if (todo) {
                Object.assign(todo, action.payload);
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
