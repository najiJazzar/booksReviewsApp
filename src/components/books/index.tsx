import React, { Key } from "react";
import styled from "styled-components";
import {
  IBooksByCategory,
  BooksColorTheme,
} from "../../models/booksByCategory";
import BooksCarousel from "./books-carousel";

const getBookColorTheme = (index: number) => {
  if (index % 2 === 0) {
    return BooksColorTheme.Light;
  }

  return BooksColorTheme.Dark;
};

const Books = ({
  booksByCategory,
}: {
  booksByCategory: IBooksByCategory[];
}) => (
  <>
    {booksByCategory.map((booksGroup, i) => {
      const booksTheme = getBookColorTheme(i);
      return (
        <Container booksTheme={booksTheme} key={i as Key}>
          <BooksCarousel booksTheme={booksTheme} booksGroup={booksGroup} />
        </Container>
      );
    })}
  </>
);

const Container = styled.div<{ booksTheme: BooksColorTheme }>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme, booksTheme }) => theme.background[booksTheme]};
`;

export default Books;
