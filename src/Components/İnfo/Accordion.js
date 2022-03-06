import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { RemoveAccordion, SetExpandCollapse } from "../../store/AccordionSlice";
import { useDispatch } from "react-redux";
import { addToStore } from "../../store/textSlice";
import { current } from "@reduxjs/toolkit";
import TextArea from "./TextArea";

//STYLES
const Container = styled.div`
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding: 0rem 0.4rem;
  color: black;
  position: relative;
  transform: ${(props) => (props.isVisible ? "" : "TranslateX(-1200px)")};
  transition: ease-in-out 0.4s all;
  :hover img {
    opacity: 100;
  }
`;
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
  :hover * {
    color: ${({ theme }) => theme.colors.highlight};
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
    props.Expanded ? (props.Skills ? "110px" : "500px") : "0px"};
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
const İnputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 47%;
  position: relative;
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

const Label = styled.label`
  font-size: 0.86rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;
`;
//STYLES

const RangeContainer = styled.div`
  width: 47%;

  display: flex;
  align-items: flex-end;
`;

const Range = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  width: 100%;
  height: 70%;
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.grayMid};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 55px;
    width: 75px;
    border-radius: 3px;
    background: gray;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const Accordion = ({ id, state, type }) => {
  const [isVisible, setİsVisible] = useState(true);
  const [Expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setİsVisible(!isVisible);
    setTimeout(() => dispatch(RemoveAccordion({ id, type })), 400);
  };
  const imgProps = {
    src: "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png",
    onClick: handleDelete,
  };
  const contProps = {
    isVisible: isVisible,
  };
  const handleFocus = (e) => {
    const border = e.target.nextElementSibling;
    border.style.width = "100%";
  };

  const handleBlur = (e) => {
    const border = e.target.nextElementSibling;
    border.style.width = "0";
  };
  const inputProps = {
    onFocus: (e) => handleFocus(e),
    onBlur: (e) => handleBlur(e),
    onChange: (e) => {
      dispatch(addToStore({ [e.target.id]: e.target.value }));
    },
    autoComplete: "off",
  };

  //FORMS

  //FORMS
  return (
    <Container {...contProps}>
      <Deleteİmg {...imgProps}></Deleteİmg>
      <ExpandCollapse
        style={{ color: "#191C24", fontSize: "1rem" }}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {id}
        {Expanded ? (
          <CollapseArrow src="https://img.icons8.com/ios-glyphs/30/000000/collapse-arrow.png" />
        ) : (
          <ExpandArrow src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png" />
        )}
      </ExpandCollapse>

      {type === "Skills" ? (
        <ContentContainer Skills={true} Expanded={Expanded}>
          <div>
            <İnputContainer>
              <Label>Wanted Job Title </Label>
              <İnput id="job-title" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
            <RangeContainer>
              <Range></Range>
            </RangeContainer>
          </div>
        </ContentContainer>
      ) : (
        <ContentContainer Expanded={Expanded}>
          <div>
            <İnputContainer>
              <Label>Wanted Job Title </Label>
              <İnput id="job-title" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
            <İnputContainer>
              <Label>City</Label>
              <İnput id="city" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
          </div>
          <div>
            <İnputContainer>
              <Label>Wanted Job Title </Label>
              <İnput id="job-title" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
            <İnputContainer>
              <Label>City</Label>
              <İnput id="city" {...inputProps} />
              <FocusBorder />
            </İnputContainer>
          </div>
          <section>
            <TextArea type={type} />
          </section>
        </ContentContainer>
      )}
    </Container>
  );
};
