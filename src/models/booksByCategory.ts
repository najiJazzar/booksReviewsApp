import { IBook } from "./book";

export interface IBooksByCategory {
  category: string;
  books: IBook[];
}

export enum BooksColorTheme {
  Light = "light",
  Dark = "dark",
}
