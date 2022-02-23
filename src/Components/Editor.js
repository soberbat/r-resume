import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Editor({ colors }) {
  // STYLES
  const Wrapper = styled(motion.div)`
    background-color: ${colors.gray};

    width: 50%;
    height: 100vh;
    position: fixed;
    padding: 0rem 8rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `;
  const PageToPrint = styled.div`
    height: 90%;
    background-color: ${colors.white};
    border-radius: 0.4rem;
    padding: 1.4rem 3rem;
    width: 100%;

    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.5);
  `;
  const Button = styled.button`
    background-color: ${colors.orange};
    padding: 0.9rem 2.1rem;
    border: none;

    border-radius: 0.2rem;
    color: ${colors.white};
    font-size: 1rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    align-self: flex-end;

    box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.5);
  `;

  //   const CloseEditor = styled.span`
  //     padding: 0.5rem 0.8rem;
  //     border-radius: 300px;
  //     background-color: ${colors.white};
  //     color: ${colors.gray};
  //     font-family: "Ubuntu", sans-serif;
  //     position: absolute;
  //     bottom: 35px;
  //     right: 40px;
  //     font-size: 1rem;
  //     font-weight: 700;
  //   `;
  // STYLES

  return (
    <Wrapper>
      <PageToPrint>
        <h1>sfsf</h1>
      </PageToPrint>
      <Button>Download PDF</Button>
      {/* <CloseEditor>X</CloseEditor> */}
    </Wrapper>
  );
}

export default Editor;
