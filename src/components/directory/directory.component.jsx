import BookItem from "../bookItem/bookItem.component";
import { Fragment } from "react";

import { CategoryContainer, Title } from './directory.styles';

const Directory = ({ books }) => {
  return (
    <Fragment>
      <Title>Top 10 Books</Title>
      <CategoryContainer>
        {books &&
          books.filter((_, index) => index < 10).map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Directory;
