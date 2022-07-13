import React from "react";
import styled from "styled-components";
import { ICategory } from "../../models/category";

const Category = ({ category }: { category: ICategory }) => (
  <Container>
    <CategoryLogo src={category.image} />
    <CategoryInfo>
      <h1>{category.title}</h1>
      <p>{category.description}</p>
    </CategoryInfo>
  </Container>
);

const Container = styled.div`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`;

const CategoryLogo = styled.img`
  width: 42px;
  height: 43px;
`;

const CategoryInfo = styled.section`
  h1 {
    color: #0f0f0f;
    font-weight: 400;
    font-size: 1rem;
  }
  p {
    color: #818181;
    font-size: 0.9rem;
  }
`;

export default Category;
