import React, { useRef } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { PageToPrint } from "./PageToPrint";
import { useReactToPrint } from "react-to-print";
import SvgRLogo from "../../logo/MyLogo";

function Editor({ colors }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const visiblity = useSelector((state) => state.values.visibility);

  const Wrapper = styled(motion.div)`
    background-color: ${colors.white};
    position: relative;

    box-sizing: border-box;
    width: 40%;
    height: 100vh;
    position: fixed;
    padding: 0rem 4rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;

  const Button = styled.button`
    background-color: ${colors.grayMid};
    padding: 0.9rem 2.1rem;
    border: none;
    border-radius: 3.2px;
    color: ${colors.black};
    font-size: 1rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    width: 50%;
  `;

  const Container = styled(motion.div)`
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 1rem;
    width: 100%;

    span {
      position: absolute;
      top: 40%;
      right: 43%;
    }
  `;

  const SavingSpinner = styled(motion.span)`
    border: 10px solid aliceblue;
    border-top: 10px solid blue;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    animation: spin 3s linear infinite;
    z-index: 1000;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <Wrapper>
      <PageToPrint colors={colors} ref={componentRef} />
      <Container>
        <Button onClick={handlePrint}>Download PDF</Button>
        <span>{visiblity && <SavingSpinner key="131414" id="1414141" />}</span>
      </Container>
    </Wrapper>
  );
}

export default Editor;
