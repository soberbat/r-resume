import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { render } from "@testing-library/react";

function AccordionForm() {
  const Container = styled(motion.div)`
    border: 0.7px solid gainsboro;
    border-radius: 2px;
    color: black;
  `;

  return (
    <>
      <Container>
        <Content />
      </Container>
    </>
  );
}

const Content = () => {
  const [isExpanded, setİsExpanded] = useState(false);
  return (
    <AnimatePresence>
      <button onClick={() => setİsExpanded((prev) => !prev)}> 4522424</button>
      {isExpanded ? (
        <motion.div
          key="answer"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
        >
          <motion.h1 key={"1331"} style={{ fontSize: "10rem", color: "black" }}>
            {" "}
            BOK YE
          </motion.h1>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default AccordionForm;
