import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

function Overlay({ colors }) {
  const [isVisible, setİsVibisble] = useState(true);
  // STYLES
  const Overlay = styled(motion.div)`
    background-color: ${colors.white};
    width: 100%;
    height: 100%;
    z-index: -10;
    position: absolute;
    right: 0;
    background-color: ${colors.black};
  `;
  // STYLES
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isVisible ? (
          <Overlay
            onAnimationComplete={(e) => {
              setTimeout(setİsVibisble(false), 1000);
            }}
            initial={{ x: 0, y: 0, width: 0 }}
            animate={{
              width: "100%",
              opacity: 1,
              transition: { duration: 1, delay: 0.4, ease: "easeIn" },
            }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          ></Overlay>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Overlay;
