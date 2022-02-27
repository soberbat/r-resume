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
      color: blue;
      font-size: 0.8rem;
    }
  `;

  const İnputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 47%;
  `;
  const Header = styled.input`
    font-size: 1.4rem;
    border: none;
    outline: none;
    font-weight: 600;
    width: 170px;
  `;

  const İnput = styled.input`
    background-color: ${colors.grayMid};
    border-radius: 3px;
    border: none;
    color: ${colors.gray};
    padding: 1rem 0.4rem;
    width: 100%;
    text-indent: 10px;
    font-weight: 400;

    :focus {
      outline: 1px solid #00cee0;
    }
  `;

  const Label = styled.label`
    font-size: 0.9rem;
    color: ${colors.textColor};
    margin-bottom: 0.5rem;
    font-weight: 300;
    letter-spacing: 0.3px;
  `;

  const HeaderContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: start;
  `;

  // ──────────────────────────────────────────────────

  return (
    <PersonalDetails>
      <SectionText defaultVal={"Personal Details"} />
      <div>
        <İnputContainer>
          <Label>Wanted Job Title </Label>
          <İnput
            id="job-title"
            onChange={(e) => {
              dispatch(addToStore({ [e.target.id]: e.target.value }));
            }}
          />
        </İnputContainer>
        <İnputContainer>
          <Label>City</Label>
          <İnput
            id="city"
            onChange={(e) => {
              dispatch(addToStore({ [e.target.id]: e.target.value }));
            }}
          />
        </İnputContainer>
      </div>
      <div>
        <İnputContainer>
          <Label>First Name</Label>
          <İnput
            id="name"
            onChange={(e) => {
              dispatch(addToStore({ [e.target.id]: e.target.value }));
            }}
          />
        </İnputContainer>
        <İnputContainer>
          <Label>Last Name</Label>
          <İnput
            id="last-name"
            onChange={(e) => {
              dispatch(addToStore({ [e.target.id]: e.target.value }));
            }}
          />
        </İnputContainer>
      </div>
      <div>
        <İnputContainer>
          <Label>Email</Label>
          <İnput
            id="email"
            onChange={(e) => {
              dispatch(addToStore({ [e.target.id]: e.target.value }));
            }}
          />
        </İnputContainer>
        <İnputContainer>
          <Label>Phone</Label>
          <İnput
            id="phone"
            onChange={(e) => {
              dispatch(addToStore({ [e.target.id]: e.target.value }));
            }}
          />
        </İnputContainer>
      </div>
      <Additionals colors={colors} />
    </PersonalDetails>
  );
}

export default Forms;
