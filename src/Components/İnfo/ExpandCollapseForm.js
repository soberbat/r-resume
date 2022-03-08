import React, { useState } from "react";
import styled from "styled-components";
import { current } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { AddAccordion } from "../../store/AccordionSlice";
import { Accordion } from "./Accordion";
import store from "../../store/store";

const Wrapper = styled.div``;
const AddContainer = styled.div`
  padding: 0.6rem 0.8rem;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 600;
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

export const ExpandCollapseForm = ({ type }) => {
  const AccordionObject = useSelector(
    (state) => state.Accordions.Accordions[type]
  );

  const { Properties } = store.getState();
  const state = Properties[type];

  const dispatch = useDispatch();
  const handleAddClick = () => {
    const id = `component-${Math.random().toString(16).slice(1)}`;
    dispatch(AddAccordion({ id: id, type: type }));
  };

  const addClickText = () => {
    let oneMore = Object.keys(AccordionObject).length > 0;
    return `+ Add ${oneMore ? "one more" : ""} ${state?.addButton}   `;
  };
  return (
    <Wrapper>
      {Object.keys(AccordionObject).map((id, i) => {
        return (
          <Container key={"container" + i}>
            <Accordion state={state} key={id} id={id} type={type} />
          </Container>
        );
      })}
      <AddContainer onClick={handleAddClick}>{addClickText()}</AddContainer>
    </Wrapper>
  );
};
