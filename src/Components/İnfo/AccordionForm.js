import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { render } from "@testing-library/react";

function AccordionForm({ colors }) {
  const Container = styled(motion.div)`
    border: 0.7px solid gainsboro;
    border-radius: 2px;
    color: black;
  `;
  return (
    <>
      <Container>
        <Content colors={colors} />
      </Container>
    </>
  );
}

const Content = ({ colors }) => {
  const [isExpanded, setİsExpanded] = useState(true);

  // ──────────────────────────────────────── STYLES ──────────

  const ExpandArrow = styled.img`
    width: 0.8rem;
  `;
  const CollapseArrow = styled.img`
    width: 0.8rem;
  `;

  const ExpandCollapse = styled(motion.span)`
    color: ${colors.highlight};
    font-weight: 500;
    font-size: 10rem;
    font-size: 1px;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  `;

  const Container = styled(motion.div)``;

  // ──────────────────────────────────────────────────

  return (
    <AnimatePresence>
      <ExpandCollapse
        style={{ color: colors.gray }}
        onClick={() => {
          setİsExpanded((prev) => !prev);
        }}
      >
        (Not Specified)
        {isExpanded ? (
          <CollapseArrow src="https://img.icons8.com/ios-glyphs/30/000000/collapse-arrow.png" />
        ) : (
          <ExpandArrow src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png" />
        )}
      </ExpandCollapse>
      {isExpanded ? (
        <Container
          key="answer"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
        >
          sfaAS
        </Container>
      ) : null}
    </AnimatePresence>
  );
};

export default AccordionForm;
