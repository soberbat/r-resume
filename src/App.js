import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./logo/index.css";
import Logo from "./logo/Logo";
import Editor from "./Components/Editor/Editor";
import Infos from "./Components/İnfo/İnfos";
import { motion, AnimatePresence } from "framer-motion";
import Overlay from "./Components/Overlay";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#93A8AC",
    darkGray: "#191C24",
    gray: "#2B2E2F",
    grayMid: "#f0f2f9",
    lightGray: "#7B8E87",
    orange: "#EF8354",
    white: "#FDFFFC",
    textColor: "#838ca3",
    highlight: "#1b91f0",
  },
};

function App() {
  // STATE
  const [colors, setColors] = useState({
    black: "#93A8AC",
    darkGray: "#191C24",
    gray: "#2B2E2F",
    grayMid: "#f0f2f9",
    lightGray: "#7B8E87",
    orange: "#EF8354",
    white: "#FDFFFC",
    textColor: "#838ca3",
    highlight: "#1b91f0",
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
    <ThemeProvider theme={theme}>
      <MainWrapper onClick={() => setAnimateLogo(true)}>
        {AnimateLogo ? (
          <motion.div key="131344">
            <Overlay colors={colors} />
            <motion.div
              id="rmvt"
              onAnimationComplete={() => {
                handlePos();
              }}
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: {
                  delay: 1.8,
                  duration: 0.8,
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
    </ThemeProvider>
  );
}

export default App;
