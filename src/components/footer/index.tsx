import React, { Key } from 'react';
import styled from "styled-components";
import linksData from "../../assets/data/footer-links.json";
import { DEVICE } from '../../constants';
import FooterSection from "./footer-section";

const Footer = () => (
  <Container>
    {Object.keys(linksData).map((linksGroupName, i) => (
      <SectionContainer key={i as Key}>
        <h1>{linksGroupName}</h1>
        <FooterSection
          links={linksData[linksGroupName as keyof typeof linksData]}
        />
      </SectionContainer>
    ))}
  </Container>
);

const Container = styled.footer`
  padding: 0 10rem;
  background-color: #323232;
  display: flex;

  @media ${DEVICE.MOBILE} {
    flex-direction: column;
    padding: 1rem;
  }
`;

const SectionContainer = styled.section`
  color: ${({ theme }) => theme.default.white};
  transition: all 0.3s ease-in;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  border-left: 1px solid ${({ theme }) => theme.default.black};

  h1 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media ${DEVICE.MOBILE} {
    padding: 1rem;
    border-left: unset;
    border-bottom: 1px solid ${({ theme }) => theme.default.black};
  }
`;

export default Footer;
