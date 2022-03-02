import React, { useState } from "react";
import styled from "styled-components";
import { addToStore } from "../../store/textSlice";
import { useSelector, useDispatch } from "react-redux";

const TextArea = ({ colors }) => {
  const [TextAreaCount, setTextAreaCount] = useState(0);
  const dispatch = useDispatch();
  const Label = styled.label`
    font-size: 0.86rem;
    color: ${colors.textColor};
    margin-bottom: 0.5rem;
    font-weight: 300;
    letter-spacing: 0.3px;
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
  const SummaryText = styled.textarea`
    height: 250px;
    width: 100%;
    padding: 1rem;
    background-color: ${colors.grayMid};
    border-radius: 5px;
    border: none;
    color: ${colors.gray};
    resize: none;

    :focus {
      outline: none;
    }
  `;

  const MiniCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    align-items: flex-start;
  `;
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
  return (
    <MiniCont>
      <Label>Wanted Job Title </Label>
      <SummaryText {...inputProps} onChange={calculate}></SummaryText>
      <FocusBorder />
    </MiniCont>
  );
};

export default TextArea;
