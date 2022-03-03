import React, { useState } from "react";
import styled from "styled-components";
import SectionText from "./SectionText";

function Summary({ colors }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  `;
  const SummaryText = styled.textarea`
    height: 200px;
    padding: 1rem;
    background-color: ${colors.grayMid};
    border-radius: 4px;
    border: none;
    color: ${colors.gray};
    resize: none;
    :focus {
      outline: 1px solid #00cee0;
    }
  `;

  return (
    <Container>
      <SectionText defaultVal={"Professional Summary"} />
      <SummaryText></SummaryText>
    </Container>
  );
}

export default Summary;
