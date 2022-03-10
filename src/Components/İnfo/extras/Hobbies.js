import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section``;
const Header = styled.h1`
  font-size: 1.4rem;
  color: #00373d;
  margin-bottom: 1.4rem;
  font-weight: 500;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 300;
  margin-bottom: 0.4rem;
  margin-top: 0.1rem;
  line-height: 1.5rem;
  width: 95%;
`;
const TextArea = styled.textarea`
  height: 250px;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.grayMid};
  border-radius: 5px;
  border: none;
  color: black;
  resize: none;
  font-size: 0.9rem;
  :focus {
    outline: 2px #1b91f0 solid;
  }
`;
const Hobbies = () => {
  return (
    <Container>
      <Header>Hobbies</Header>
      <Paragraph>What do you like?</Paragraph>
      <TextArea />
    </Container>
  );
};

export default Hobbies;
