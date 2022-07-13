import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/data`,
});

export const fetchCategories = async () => {
  try {
    const res = await client.get("/categories.json");

    return res.data?.categories;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const fetchBooksByCategory = async () => {
  const bookCategoriesSources = [
    { category: "fiction", url: "/categories/fiction.json" },
    { category: "nonfiction", url: "/categories/nonfiction.json" },
    { category: "children", url: "/categories/children.json" },
    { category: "self improvement", url: "/categories/self_improvement.json" },
  ];
  try {
    const tasks = bookCategoriesSources.map((source) => client.get(source.url));
    const responses = await Promise.all(tasks);
    // index order is insured to be same as supplied array
    return responses.map((response, i) => ({
      books: response.data?.books,
      category: bookCategoriesSources[i].category,
    }));
  } catch (err) {
    return Promise.reject(err);
  }
};
