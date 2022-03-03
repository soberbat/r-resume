import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ExpandCollapseForm } from "./ExpandCollapseForm";
import SectionText from "./SectionText";
import { current } from "@reduxjs/toolkit";

function AccordionSection({ colors, type }) {
  const state = useSelector((state) => state.Properties[type]);
  console.log(state);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  `;

  return (
    <Container>
      <SectionText defaultVal={type} />
      <ExpandCollapseForm colors={colors} />
    </Container>
  );
}

export default AccordionSection;
