import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { PageToPrint } from "./PageToPrint";
import { useReactToPrint } from "react-to-print";

function Editor({ colors }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const Wrapper = styled(motion.div)`
    background-color: ${colors.black};
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

  const Button = styled.button`
    background-color: ${colors.white};
    padding: 0.9rem 2.1rem;
    border: none;
    border-radius: 0.2rem;
    color: ${colors.black};
    font-size: 1rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    align-self: flex-end;
  `;

  return (
    <Wrapper>
      <PageToPrint colors={colors} ref={componentRef} />
      <Button onClick={handlePrint}>Download PDF</Button>
    </Wrapper>
  );
}

export default Editor;
