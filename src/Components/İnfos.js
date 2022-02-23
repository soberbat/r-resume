import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Formix from "./Formix";

function Infos({ colors, sides, formik }) {
  // ──────────────────────────────────────── Styled Components ──────────
  const Wrapper = styled(motion.div)`
    background-color: ${colors.white};
    width: 50%;
    color: blue;
    padding: 5rem 2.7rem;
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
      font-size: 0.8rem;
      margin-left: 0.4rem;
    }
  `;

  // ──────────────────────────────────────────────────

  //

  return (
    <Wrapper>
      <ProgressBarContainer>
        <ItemContainer>
          <span>
            27% <span>Profile Completeness</span>
          </span>
          <span>
            8% <span>Add Job Title</span>
          </span>
        </ItemContainer>
        <ProgressBar></ProgressBar>
      </ProgressBarContainer>
      <Formix formik={formik} colors={colors} />
    </Wrapper>
  );
}

export default Infos;
