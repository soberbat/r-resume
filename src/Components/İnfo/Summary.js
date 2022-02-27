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
    border-radius: 3px;
    border: none;
    color: ${colors.gray};
    resize: none;
    :focus {
      outline: 1px solid #00cee0;
    }
  `;

  const Paragraph = styled.p`
    font-size: 0.9rem;
    color: ${colors.textColor};
    font-weight: 300;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    line-height: 1.5rem;
  `;

  return (
    <Container>
      <SectionText defaultVal={"Professional Summary"} />
      <Paragraph>
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </Paragraph>
      <SummaryText></SummaryText>
    </Container>
  );
}

export default Summary;
