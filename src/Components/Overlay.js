import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
      {isVisible ? (
        <Overlay
          onAnimationComplete={(e) => {
            console.log(e);
            // setTimeout(setİsVibisble(false), 1000);
          }}
          initial={{ width: 0 }}
          animate={{
            width: "100%",
            opacity: 1,
            transition: { duration: 0.8, delay: 0.4, ease: "easeIn" },
          }}
        >
          a
        </Overlay>
      ) : null}
    </>
  );
}

export default Overlay;
