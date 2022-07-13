import React from "react";
import styled from "styled-components";
import { IBook } from "../../models/book";
import { BooksColorTheme } from "../../models/booksByCategory";

const Book = ({
  image,
  title,
  author,
  reviewedBy,
  booksTheme,
}: IBook & { booksTheme: BooksColorTheme }) => (
  <Container booksTheme={booksTheme}>
    <img src={image} alt="book" />
    <h2>{title}</h2>
    <div>
      <p>by {author}</p>
      <p>reviewed by {reviewedBy}</p>
    </div>
  </Container>
);

const Container = styled.article<{ booksTheme: BooksColorTheme }>`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 13rem;
  img {
    width: 175px;
    height: 248px;
  }
  h2 {
    color: ${({ theme, booksTheme }) =>
      booksTheme === BooksColorTheme.Dark
        ? theme.default.white
        : theme.default.black};
    font-weight: 400;
    font-size: 1rem;
    max-width: 175px;
    line-height: 1.4;
  }
  p {
    color: ${({ theme, booksTheme }) =>
      booksTheme === BooksColorTheme.Dark
        ? theme.default.green
        : theme.default.grey};
    font-size: 0.9rem;
    max-width: 175px;
    font-weight: 100;
    text-transform: uppercase;
  }
`;

export default Book;
