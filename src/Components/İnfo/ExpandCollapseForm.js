import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Accordion } from "./Accordion";

export const ExpandCollapseForm = ({ colors }) => {
  const [FormCount, setFormCount] = useState(0);
  const handleAddClick = () => {
    setFormCount((prev) => prev + 1);
  };
  const Wrapper = styled.div``;
  const AddContainer = styled.div`
    padding: 0.6rem 0.8rem;
    color: ${colors.highlight};
    font-weight: 500;
    font-size: 0.9rem;
    border-radius: 3px;
    margin-bottom: 10rem;
    :hover {
      background-color: aliceblue;
    }
  `;

  const Container = styled.div`
    gap: 1rem;
    margin-bottom: 1rem;
  `;

  return (
    <Wrapper>
      {[...Array(FormCount)].map((k, i) => (
        <Container key={"container" + i}>
          {" "}
          <Accordion key={i} colors={colors} />
        </Container>
      ))}
      <AddContainer onClick={handleAddClick}>+ Add Employment</AddContainer>
    </Wrapper>
  );
};
