import React, { useRef, Key } from "react";
import _Slider from "react-slick";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  library,
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Book from "./book";
import {
  IBooksByCategory,
  BooksColorTheme,
} from "../../models/booksByCategory";
import { DEVICE } from "../../constants";

const BooksByCategory = ({
  booksTheme,
  booksGroup,
}: {
  booksTheme: BooksColorTheme;
  booksGroup: IBooksByCategory;
}) => {
  // font-awesome syntax to add icons 
  library.add(faAngleLeft, faAngleRight);
  const iconRightLookup: IconLookup = {
    prefix: "fas",
    iconName: "angle-right",
  };
  const iconLeftLookup: IconLookup = { prefix: "fas", iconName: "angle-left" };
  const nextIcon: IconDefinition = findIconDefinition(iconRightLookup);
  const prevIcon: IconDefinition = findIconDefinition(iconLeftLookup);

  const sliderRef = useRef<_Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    variableWidth: true,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  return (
    <Container booksTheme={booksTheme}>
      <PrevButton onClick={() => sliderRef?.current?.slickPrev()}>
        <Icon icon={prevIcon} />
      </PrevButton>
      <NextButton onClick={() => sliderRef?.current?.slickNext()}>
        <Icon icon={nextIcon} />
      </NextButton>
      <h1>{booksGroup.category}</h1>
      <Slider ref={sliderRef} {...settings}>
        {booksGroup?.books?.map((book) => (
          <Book
            key={book.id as Key}
            booksTheme={booksTheme}
            image={book.image}
            title={book.title}
            author={book.author}
            reviewedBy={book.reviewedBy}
          />
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.section<{ booksTheme: BooksColorTheme }>`
  display: flex;
  flex-direction: column;
  margin: 2rem 10rem;
  width: 80%;
  h1 {
    color: ${({ theme, booksTheme }) =>
    booksTheme === BooksColorTheme.Dark
      ? theme.default.white
      : theme.default.black};
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  @media ${DEVICE.MOBILE} {
    margin: 2rem 1rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  z-index: 100;
  background-color: ${({ theme }) => theme.default.white};
  border: none;
  width: 2.5rem;
  height: 2.5rem;
`;

const NextButton = styled(Button)`
  right: 6%;
  @media ${DEVICE.MOBILE} {
    right: 1%;
  }
`;

const PrevButton = styled(Button)`
  left: 6%;
  @media ${DEVICE.MOBILE} {
    left: 1%;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: #cdcdcd;
  font-size: 1.2rem;
`;

const Slider = styled(_Slider)`
  @media ${DEVICE.MOBILE} {
    padding: 0 4rem;
    max-height: 366px;
    margin-left: 2rem;
  }
`;

export default BooksByCategory;
