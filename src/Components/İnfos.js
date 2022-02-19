import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Infos({ colors, sides }) {
  // STYLES
  const Wrapper = styled(motion.div)`
    background-color: ${colors.white};
    width: 50%;
    height: 200vh;
    padding: 5rem 5rem;
    color: white;
    font-family: "Ubuntu", sans-serif;
  `;
  const ProgressBarContainer = styled.div``;
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

  // STYLES
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
    </Wrapper>
  );
}

export default Infos;
