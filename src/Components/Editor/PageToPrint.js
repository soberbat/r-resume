import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

export const PageToPrint = React.forwardRef((props, ref) => {
  const { colors } = props;
  const state = useSelector((state) => state.values.values);
  console.log(state);

  const PageToPrint = styled.div`
    height: 90%;
    background-color: ${colors.white};
    border-radius: 6px;
    padding: 1.4rem 3rem;
    width: 100%;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.5);
  `;

  return (
    <PageToPrint ref={ref}>
      <motion.h1
        animate={{ opacity: 100, transition: { duration: 3 } }}
        initial={{ opacity: 0 }}
      >
        {" "}
        title: {state[`job-title`]}
      </motion.h1>
    </PageToPrint>
  );
});
