import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Overlay({ colors }) {
  const [isVisible, setİsVibisble] = useState(true);
  // STYLES
  const Overlay = styled(motion.div)`
    background-color: ${colors.white};
    width: 200%;
    height: 200%;
    z-index: 100;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 100%;
    background-color: ${colors.black};
  `;
  // STYLES
  return (
    <>
      {isVisible ? (
        <Overlay
          onAnimationComplete={(e) => {
            console.log(e);
            // setİsVibisble(false);
          }}
          //   initial={{ x: 0, y: 0 }}
          animate={{
            y: "-100vh",
            x: "100vw",
            transition: { duration: 2, delay: 0, ease: "easeInOut" },
          }}
        >
          a
        </Overlay>
      ) : null}
    </>
  );
}

export default Overlay;
