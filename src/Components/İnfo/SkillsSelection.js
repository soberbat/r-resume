import React from "react";
import styled from "styled-components";

const Container = styled.div``;

//RADİO
const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  gap: 0.5rem;
`;
const Radio = styled.input.attrs({ type: "radio" })``;
const Label = styled.label`
  font-size: 0.8rem;
  color: black;
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;
`;
//RADİO

//SELECTİONS
const SelectionsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  gap: 0.5rem;
`;

const Selection = styled.span`
  color: black;
  background-color: ${({ theme }) => theme.colors.grayMid};
  padding: 0.5rem 0.5rem;
  font-size: 0.9rem;
  border-radius: 3.2px;
`;

//SELECTİONS

const SkillsSelection = () => {
  return (
    <Container>
      <RadioContainer>
        <Radio></Radio>
        <Label>Dont show experience level</Label>
      </RadioContainer>
      <SelectionsContainer>
        <Selection>Communication Skills </Selection>
      </SelectionsContainer>
    </Container>
  );
};

export default SkillsSelection;
