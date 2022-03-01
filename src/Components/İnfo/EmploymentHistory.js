import React, { useState } from "react";
import styled from "styled-components";
import { ExpandCollapseForm } from "./ExpandCollapseForm";
import SectionText from "./SectionText";

function EmploymentHistory({ colors }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
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
      <SectionText defaultVal={"Employment History"} />
      <Paragraph>
        Show your relevant experience(last 10 years). Use bullet points to note
        your achievements, if possible use numbers,facts.
      </Paragraph>
      <ExpandCollapseForm colors={colors} />
    </Container>
  );
}

export default EmploymentHistory;
