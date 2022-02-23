import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as ReactLogo } from "./r-logo.svg";

function Logo({ AnimateLogo }) {
  const MotionComponent = motion(ReactLogo);
  const [visibility, setVisibility] = useState(false);

  const childVar = {
    initial: {
      x: "180%",
      y: -200,
      width: "20%",
    },
    animated: {
      x: 30,
      y: 0,
      width: "3%",
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      x: -150,
      ease: "easeInOut",
      transition: { duration: 1, delay: 1.6 },
    },
  };

  return (
    <AnimatePresence>
      {visibility ? null : (
        <MotionComponent
          exit="exit"
          key="asas"
          onClick={() => setVisibility(true)}
          onAnimationComplete={() => {
            setVisibility(true);
          }}
          variants={childVar}
          animate={AnimateLogo ? "animated" : ""}
          initial="initial"
        ></MotionComponent>
      )}
    </AnimatePresence>
  );
}

export default Logo;
