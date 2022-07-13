import React, { Key } from "react";
import styled from "styled-components";
import { DEVICE } from "../../constants";

const FooterSection = ({ links }: { links: string[] }) => (
  <FooterLinks>
    {links.map((link, i) => (
      <a href="#" key={i as Key}>
        {link}
      </a>
    ))}
  </FooterLinks>
);

const FooterLinks = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-auto-flow: column;
  row-gap: 0.7rem;
  column-gap: 6rem;

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: ${({ theme }) => theme.default.grey};
    transition: all 0.3s ease-in;
    font-weight: 100;
    &:hover {
      color: ${({ theme }) => theme.default.green};
      transition: inherit;
    }
  }

  @media ${DEVICE.MOBILE} {
    grid-auto-flow: row;
  }

`;

export default FooterSection;
