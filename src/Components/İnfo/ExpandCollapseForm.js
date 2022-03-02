import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { AddAccordion } from "../../store/AccordionSlice";
import { Accordion } from "./Accordion";

export const ExpandCollapseForm = ({ colors }) => {
  const count = useSelector((state) => state.Accordions.numberOfAccordions);
  const dispatch = useDispatch();
  const handleAddClick = () => {
    dispatch(AddAccordion());
  };
  console.log(count);

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
      {[...Array(count)].map((k, i) => (
        <Container key={"container" + i}>
          {" "}
          <Accordion key={i + "Accordion"} idx={i} colors={colors} />
        </Container>
      ))}
      <AddContainer onClick={handleAddClick}>+ Add Employment</AddContainer>
    </Wrapper>
  );
};
