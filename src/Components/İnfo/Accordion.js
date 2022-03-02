import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { RemoveAccordion, SetExpandCollapse } from "../../store/AccordionSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToStore } from "../../store/textSlice";
import { colors } from "../../App";
import TextArea from "./TextArea";

//STYLES
const Container = styled.div`
  border: 1.4px solid gainsboro;
  border-radius: 5px;
  padding: 0.3rem 0.4rem;
  color: black;
  position: relative;
  opacity: ${(props) => (props.isVisible ? "100" : "0")};
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s all;
  :hover img {
    opacity: 100;
  }

  :hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.04);
  }
`;
const ExpandArrow = styled.img`
  width: 1.2rem;
`;
const CollapseArrow = styled.img`
  width: 1.2rem;
`;
const ExpandCollapse = styled(motion.span)`
  color: blue;
  font-weight: 500;
  height: 75px;
  padding: 1rem;
  font-size: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
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
//STYLES

export const Accordion = ({ colors, isExpanded, idx }) => {
  const [TextAreaCount, setTextAreaCount] = useState(0);
  const [isVisible, setİsVisible] = useState(true);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setİsVisible(!isVisible);
    setTimeout(() => dispatch(RemoveAccordion()), 400);
  };
  const handleExpandCollapse = () => {
    dispatch(SetExpandCollapse(idx));
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
  const calculate = (e) => {
    setTextAreaCount((prev) => prev + 1);
  };
  //FORMS

  const İnputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 47%;
  `;

  const FocusBorder = styled.span`
    height: 2px;
    background-color: #1b91f0;
    width: 0%;
    transition: all 0.1s ease-in;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 1px;
    align-self: center;
  `;

  const İnput = styled.input`
    background-color: ${colors.grayMid};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border: none;
    color: ${colors.gray};
    padding: 1rem 0.4rem;
    width: 100%;
    text-indent: 10px;
    font-weight: 400;

    :focus {
      outline: none;
    }
  `;

  const Label = styled.label`
    font-size: 0.86rem;
    color: ${colors.textColor};
    margin-bottom: 0.5rem;
    font-weight: 300;
    letter-spacing: 0.3px;
  `;
  const ContentContainer = styled.div`
    height: ${(props) => (props.isExpanded ? "auto" : "0px")};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
    transition: all 0.6s ease-in-out;
    > div {
      display: flex;
      justify-content: space-between;
    }

    > section {
      display: flex;
      flex-direction: column;
    }
  `;

  const MiniCont2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
  `;

  //FORMS

  return (
    <Container {...contProps}>
      <Deleteİmg {...imgProps}></Deleteİmg>
      <ExpandCollapse
        style={{ color: colors.gray, fontSize: "1rem" }}
        onClick={handleExpandCollapse}
      >
        (Not Specified ds)
        {isExpanded ? (
          <CollapseArrow src="https://img.icons8.com/ios-glyphs/30/000000/collapse-arrow.png" />
        ) : (
          <ExpandArrow src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png" />
        )}
      </ExpandCollapse>
      <ContentContainer isExpanded={isExpanded}>
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
          <TextArea colors={colors} />
          <MiniCont2>
            <Label>
              Recruiter Tip : write 200+ characters to increase interview
              chances{" "}
            </Label>
            <Label> {TextAreaCount} /200+</Label>
          </MiniCont2>
        </section>
      </ContentContainer>
    </Container>
  );
};

// const obj = { 0: true, 1: false, 2: true, 3: false };
// let newOne = Object.entries(obj).map(([key, value]) => {
//   console.log(`${key}: ${value}`);
//   value = value ? false : value;
//   return [key, value];
// });
// console.log(newOne);

// const newObj = Object.fromEntries(newOne);

// console.log(newObj);
