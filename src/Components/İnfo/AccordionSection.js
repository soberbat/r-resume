import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ExpandCollapseForm } from "./ExpandCollapseForm";
import SectionText from "./SectionText";
import store from "../../store/store";

//STYLES
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.6rem;
`;
//STYLES
function AccordionSection({ type }) {
  const { Properties } = store.getState();
  const state = Properties[type];
  console.log(state);

  return (
    <Container>
      <SectionText state={state} />
      <ExpandCollapseForm state={state} type={type} />
    </Container>
  );
}

export default AccordionSection;
