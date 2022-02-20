import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Overlay({ colors }) {
  const [isVisible, setİsVibisble] = useState(true);
  // STYLES
  const Overlay = styled(motion.div)`
    background-color: ${colors.white};
    width: 700%;
    height: 700%;
    z-index: -10;
    position: absolute;
    top: 0;
    left: 0;
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
            setİsVibisble(false);
          }}
          //   initial={{ x: 0, y: 0 }}
          animate={{
            y: "100vh",
            x: "100vw",
            scale: 0,
            transition: { duration: 5, delay: 0, ease: "easeInOut" },
          }}
        ></Overlay>
      ) : null}
    </>
  );
}

export default Overlay;
