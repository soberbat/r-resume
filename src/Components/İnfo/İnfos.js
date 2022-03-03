import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Forms from "./Forms";
import { useSelector } from "react-redux";
import Summary from "./Summary";
import EmploymentHistory from "./EmploymentHistory";
import SectionText from "./SectionText";

function Infos({ colors, sides }) {
  const state = useSelector((state) => state.form);

  // ──────────────────────────────────────── Styled Components ──────────
  const Wrapper = styled(motion.div)`
    background-color: ${colors.white};
    height: 100vh;
    width: 50%;
    color: blue;
    padding: 4rem 2.7rem;
    color: white;
    font-size: 20px;
    font-family: "Ubuntu", sans-serif;
    position: relative;
    display: block;
  `;

  const ProgressBarContainer = styled.div`
    position: sticky;
    top: 20px;
  `;
  const ProgressBar = styled.div`
    border: 2px orange solid;
  `;
  const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.black};
    margin-bottom: 0.8rem;
    span {
      color: red;
      font-size: 1rem;
    }

    span:nth-child(2) {
      color: green;
      font-size: 1rem;
    }

    span span {
      color: gray;
      font-size: 1.1rem;
      margin-left: 0.4rem;
    }
  `;

  // ──────────────────────────────────────────────────

  //

  return (
    <Wrapper>
      <SectionText defaultVal={"Untitled"} top={true} />
      <Forms colors={colors} />
      <Summary colors={colors} />
      <EmploymentHistory colors={colors} />
    </Wrapper>
  );
}

export default Infos;
