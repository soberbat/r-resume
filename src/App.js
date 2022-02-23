import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./logo/index.css";
import Logo from "./logo/Logo";
import Editor from "./Components/Editor";
import Infos from "./Components/İnfos";
import { motion, AnimatePresence } from "framer-motion";
import Overlay from "./Components/Overlay";

function App() {
  // STATE
  const [colors, setColors] = useState({
    black: "#111218",
    darkGray: "#191C24",
    gray: "#292F36",
    grayMid: "#f0f2f9",
    lightGray: "#525252",
    orange: "#EF8354",
    white: "#FDFFFC",
  });
  const [Info, setInfo] = useState([]);

  const [AnimateLogo, setAnimateLogo] = useState(false);
  // STATE

  // STYLES
  const MainWrapper = styled.div`
    width: 100vw;
    height: 100vh;
  `;
  // STYLES

  // FUNCTİON TO REMOVE THE TRANSFORM PROPERTY İN ORDER TO FİX THE POSİTİONİNG İSSUE
  const handlePos = () => {
    let transformedDiv = document.querySelector("#rmvt");
    transformedDiv.style.transform = "none";
  };
  // FUNCTİON TO REMOVE THE TRANSFORM PROPERTY İN ORDER TO FİX THE POSİTİONİNG İSSUE

  return (
    <MainWrapper onClick={() => setAnimateLogo(true)}>
      {AnimateLogo ? (
        <motion.div key="131344">
          <Overlay colors={colors} />
          <motion.div
            id="rmvt"
            onAnimationComplete={() => {
              handlePos();
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 2,
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
          >
            <Infos colors={colors} setInfos={setInfo} />
            <Editor colors={colors} Info={Info} />{" "}
          </motion.div>
        </motion.div>
      ) : null}

      <Logo AnimateLogo={AnimateLogo} />
    </MainWrapper>
  );
}

export default App;
