import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./logo/index.css";
import Logo from "./logo/Logo";
import Editor from "./Components/Editor";
import Infos from "./Components/İnfos";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [colors, setColors] = useState({
    black: "#111218",
    darkGray: "#191C24",
    gray: "#292F36",
    orange: "#EF8354",
    white: "#FDFFFC",
  });
  const [Info, setInfo] = useState([]);

  const [AnimateLogo, setAnimateLogo] = useState(false);

  // STYLES
  const MainWrapper = styled.div`
    width: 100vw;
  `;

  const Overlay = styled(motion.div)`
    background-color: ${colors.white};
    width: 400%;
    height: 400%;
    z-index: -10;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    background-color: ${colors.black};
  `;
  // STYLES

  return (
    <MainWrapper onClick={() => setAnimateLogo(true)}>
      {AnimateLogo ? (
        <motion.div key="131344">
          <Overlay
            onTransitionEnd={(e) => console.log(e.target)}
            initial={{ x: 0, y: 0 }}
            animate={{
              y: "-500vh",
              x: -700,
              scale: 0,
              transition: { duration: 2, delay: 0, ease: "anticipate" },
            }}
          ></Overlay>
          <motion.div
            initial={{ x: "300vw" }}
            animate={{ x: 0, transition: { duration: 2, delay: 1 } }}
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
