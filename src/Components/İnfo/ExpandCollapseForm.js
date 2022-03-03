import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { AddAccordion, SetExpandCollapse } from "../../store/AccordionSlice";
import { Accordion } from "./Accordion";
import { useId } from "react-id-generator";

export const ExpandCollapseForm = ({ colors }) => {
  const Accordions = useSelector((state) => state.Accordions.Accordions);
  const Expanded = useSelector((state) => state.Accordions.ExpandCollapse);
  const dispatch = useDispatch();

  const handleAddClick = () => {
    const id = `component-${Math.random().toString(16).slice(2)}`;
    dispatch(AddAccordion(id));
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
      {Object.keys(Accordions).map((item, i) => {
        return (
          <Container key={"container" + i}>
            <Accordion key={i + "k"} id={item} colors={colors} />
          </Container>
        );
      })}
      <AddContainer onClick={handleAddClick}>+ Add Employment</AddContainer>
    </Wrapper>
  );
};
