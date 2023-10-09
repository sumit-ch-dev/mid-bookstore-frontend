import { createSelector } from 'reselect';

const selectBooks = state => state.books;

export const selectBookList = createSelector(
    [selectBooks],
    books => books.bookList
);

export const selectIsFetching = createSelector(
    [selectBooks],
    books => books.isFetching
);

export const selectErrorMessage = createSelector(
    [selectBooks],
    books => books.errorMessage
);
