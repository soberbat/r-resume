import React, { useState } from "react";
import styled from "styled-components";
import { ExpandCollapseForm } from "../ExpandCollapseForm";
import { Deleteİmg } from "../Accordion";

const İnput = styled.input`
  background-color: ${({ theme }) => theme.colors.grayMid};
  border-radius: 3.2px;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0.92rem 0.4rem;
  width: 100%;
  font-size: 1.1rem;
  text-indent: 10px;
  font-weight: 400;

  :focus {
    outline: none;
  }
`;

const FocusBorder = styled.span`
  height: 3.2px;
  background-color: #1b91f0;
  width: 0%;
  transition: all 0.1s ease-in;
  border-bottom-right-radius: 3.2px;
  border-bottom-left-radius: 3.2px;
  align-self: center;
  position: absolute;
  bottom: 0;
`;

const İnputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 47%;
  position: relative;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;
`;

const Container = styled.div`
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding: 0rem 0.4rem;
  color: black;
  position: relative;
  transform: ${(props) => (props.isVisible ? "" : "TranslateX(-1200px)")};
  transition: ease-in-out 0.3s all;
  :hover img {
    opacity: 100;
  }
`;
const Deleteİmg = styled.img`
  width: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: -30px;
  bottom: 27px;
  opacity: 0;
  transition: all 0.5s ease-in;
`;
const ContentContainer = styled.div`
  height: ${(props) =>
    props.Expanded ? (props.Skills ? "100px" : "500px") : "0px"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
  transition: ease-in-out 0.5s all;
  > div {
    display: flex;
    justify-content: space-between;
  }

  > section {
    display: flex;
    flex-direction: column;
  }
`;

const expandCollapseProps = {
  style: { color: "#191C24", fontSize: "1rem" },
  onClick: () => SetExpanded((prev) => !prev),
};
const ExpandArrow = styled.img`
  width: 0.8rem;
`;
const CollapseArrow = styled.img`
  width: 0.8rem;
`;
const ExpandCollapse = styled.span`
  color: blue;
  font-weight: 500;
  height: 70px;
  padding: 1rem;
  font-size: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: all 3s ease-in-out;
  :hover * {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const LanguageHobbyAccordions = () => {
  return (
    <Container {...contProps}>
      <Deleteİmg {...imgProps}></Deleteİmg>
      <ExpandCollapse {...expandCollapseProps}>
        {Expanded ? (
          <CollapseArrow src="https://img.icons8.com/ios-glyphs/30/000000/collapse-arrow.png" />
        ) : (
          <ExpandArrow src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png" />
        )}
      </ExpandCollapse>
      <ContentContainer Expanded={Expanded}>
        <div>
          <İnputContainer>
            <Label>Job Title </Label>
            <İnput id="which" {...inputProps} />
            <FocusBorder />
          </İnputContainer>
          <İnputContainer>
            <Label>Employer</Label>
            <İnput id="emp-deg" {...inputProps} />
            <FocusBorder />
          </İnputContainer>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default LanguageHobbyAccordions;
