import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Additionals from "./Additionals";
import { useSelector, useDispatch } from "react-redux";
import { addToStore } from "../../store/textSlice";
import SectionText from "./SectionText";

function Forms({ colors }) {
  const [penİsVisible, setPenİsVisible] = useState(false);
  const dispatch = useDispatch();

  // ──────────────────────────────────────── I ──────────

  const PersonalDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    padding: 2.2rem 0;
    > div {
      display: flex;
      justify-content: space-between;
    }

    span {
      font-size: 0.8rem;
    }
  `;

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
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
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
    font-size: 0.9rem;
    color: ${colors.textColor};
    margin-bottom: 0.5rem;
    font-weight: 300;
    letter-spacing: 0.3px;
  `;

  // ──────────────────────────────────────────────────

  // ──────────────────────────────────────── Input Props and functions ──────────

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

  // ──────────────────────────────────────────────────

  return (
    <PersonalDetails>
      <SectionText defaultVal={"Personal Details"} />
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
          <Label>First Name</Label>
          <İnput id="name" {...inputProps} />
          <FocusBorder />
        </İnputContainer>
        <İnputContainer>
          <Label>Last Name</Label>
          <İnput id="last-name" {...inputProps} />
        </İnputContainer>
      </div>
      <div>
        <İnputContainer>
          <Label>Email</Label>
          <İnput id="email" {...inputProps} />
          <FocusBorder />
        </İnputContainer>
        <İnputContainer>
          <Label>Phone</Label>
          <İnput id="phone" {...inputProps} />
          <FocusBorder />
        </İnputContainer>
      </div>
      <Additionals colors={colors} />
    </PersonalDetails>
  );
}

export default Forms;
