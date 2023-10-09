import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    books: [],
    status: 'idle',
    error: null
};

// Define the async thunk to fetch books from the backend API
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
});

// Define the book reducer slice
const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

// Export the book reducer and actions
export default bookSlice.reducer;







