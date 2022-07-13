import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Navbar from "./components/navbar";
import CategoryBrowser from "./components/category-browser";
import Books from "./components/books";
import Footer from "./components/footer";
import { fetchCategories, fetchBooksByCategory } from "./api";
import { ICategory } from "./models/category";
import { IBooksByCategory, BooksColorTheme } from "./models/booksByCategory";

const App = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [booksByCategory, setBooksByCategory] = useState<IBooksByCategory[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const categoryRes = await fetchCategories();
      setCategories(categoryRes);
    })();
    (async () => {
      const booksByCategoryRes = await fetchBooksByCategory();
      setBooksByCategory(booksByCategoryRes);
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <CategoryBrowser categories={categories} />
        <Books booksByCategory={booksByCategory} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

const theme = {
  default: {
    white: "#fdfdfc",
    green: "#82b808",
    black: "#020202",
    grey: "#818181",
  },
  background: {
    [BooksColorTheme.Dark]: "#3c3c3c",
    [BooksColorTheme.Light]: "#efefef",
  },
};

const Container = styled.div`
  height: 100vh;
`;
export default App;
