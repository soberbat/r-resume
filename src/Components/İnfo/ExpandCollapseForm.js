import React, { useState } from "react";
import styled from "styled-components";
import { current } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { AddAccordion } from "../../store/AccordionSlice";
import { Accordion } from "./Accordion";
const Wrapper = styled.div``;
const AddContainer = styled.div`
  padding: 0.6rem 0.8rem;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 3px;
  margin-bottom: 2rem;
  :hover {
    background-color: aliceblue;
  }
`;
const Container = styled.div`
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ExpandCollapseForm = ({ theState, type }) => {
  const Accordions = useSelector((state) => state.Accordions.Accordions);
  const dispatch = useDispatch();
  const handleAddClick = () => {
    const id = `component-${Math.random().toString(16).slice(2)}`;
    dispatch(AddAccordion({ id: id, type: type }));
  };

  return (
    <Wrapper>
      {Object.keys(Accordions).map((id, i) => {
        return (
          <Container key={"container" + i}>
            <Accordion theState={theState} key={id} id={id} type={type} />
          </Container>
        );
      })}
      <AddContainer onClick={handleAddClick}>+ Add Employment</AddContainer>
    </Wrapper>
  );
};
