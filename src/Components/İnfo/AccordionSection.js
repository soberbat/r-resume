import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ExpandCollapseForm } from "./ExpandCollapseForm";
import SectionText from "./SectionText";
//STYLES
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
//STYLES
function AccordionSection({ colors, type }) {
  const theState = useSelector((state) => state.Properties[type]);
  return (
    <Container>
      <SectionText theState={theState} />
      <ExpandCollapseForm state={theState} type={type} />
    </Container>
  );
}

export default AccordionSection;
