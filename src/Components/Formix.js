import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Additionals from "./Additionals";

function Formix({ colors }) {
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
    font-size: 1.1rem;
    border: none;
    outline: none;
    font-weight: 600;
  `;

  const İnput = styled(motion.input)`
    background-color: ${colors.grayMid};
    border-radius: 3px;
    border: none;
    color: ${colors.gray};
    padding: 0.84rem 0.4rem;
    width: 100%;
    text-indent: 10px;
    font-weight: 400;
    :focus {
      outline: 1px solid #00cee0;
    }
  `;

  const Label = styled.label`
    font-size: 0.8rem;
    color: ${colors.lightGray};
    margin-bottom: 0.5rem;
    font-weight: 300;
    letter-spacing: 0.1px;
  `;

  // ──────────────────────────────────────────────────

  return (
    <PersonalDetails>
      <Header defaultValue={"Personal Details"} />
      <div>
        <İnputContainer>
          <Label>Wanted Job Title</Label>
          <İnput />
        </İnputContainer>
        <İnputContainer>
          <Label>City</Label>
          <İnput />
        </İnputContainer>
      </div>
      <div>
        <İnputContainer>
          <Label>First Name</Label>
          <İnput />
        </İnputContainer>
        <İnputContainer>
          <Label>Last Name</Label>
          <İnput />
        </İnputContainer>
      </div>
      <div>
        <İnputContainer>
          <Label>Email</Label>
          <İnput />
        </İnputContainer>
        <İnputContainer>
          <Label>Phone</Label>
          <İnput />
        </İnputContainer>
      </div>
      <Additionals colors={colors} />
    </PersonalDetails>
  );
}

export default Formix;
