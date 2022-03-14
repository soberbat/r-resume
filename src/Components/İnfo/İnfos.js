import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Forms from "./Forms";
import { useSelector } from "react-redux";
import Summary from "./Summary";
import SectionText from "./SectionText";
import AccordionSection from "./AccordionSection";
import Extras from "./extras/Extras";

function Infos({ colors, sides }) {
  const state = useSelector((state) => state.form);

  // ──────────────────────────────────────── Styled Components ──────────
  const Wrapper = styled(motion.div)`
    background-color: ${colors.white};
    height: 100vh;
    width: 60%;
    color: blue;
    padding: 1rem 3rem;
    color: white;
    font-size: 20px;
    font-family: "Sarabun", sans-serif;
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
      <SectionText top={true} defaultVal={"Untitled"} />
      <Forms colors={colors} />
      <Summary colors={colors} />
      <AccordionSection colors={colors} type="EmploymentHistory" />
      <AccordionSection colors={colors} type="Education" />
      <AccordionSection colors={colors} type="İnternShips" />
      <AccordionSection colors={colors} type="Skills" />
      <Extras />
    </Wrapper>
  );
}

export default Infos;
