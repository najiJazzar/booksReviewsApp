import React, { Key } from "react";
import styled from "styled-components";
import { DEVICE, MAX_CATEGORIES_SHOWN } from "../../constants";
import { ICategory } from "../../models/category";

import Category from "./category";

const CategoryBrowser = ({ categories }: { categories: ICategory[] }) => (
  <Container>
    <Title>
      <span>Browse</span> Our Most Popular Categories
    </Title>
    <Categories>
      {categories
        .slice(0, MAX_CATEGORIES_SHOWN)
        .map((category: ICategory) => (
          <Category category={category} key={category.id as Key} />
        ))}
    </Categories>
  </Container>
);

const Container = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-around;
  padding: 4rem 10rem;
  @media ${DEVICE.MOBILE} {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  span {
    font-weight: 600;
  }
`;

const Categories = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  gap: 1rem;
  @media ${DEVICE.MOBILE} {
    grid-template: auto / 1fr;
  }
`;

export default CategoryBrowser;
