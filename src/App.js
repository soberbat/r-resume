import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import Editor from "./Components/Editor/Editor";
import Infos from "./Components/İnfo/İnfos";
import "./logo/index.css";
import { TogglePreviewVisibility } from "./store/AccordionSlice";

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

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Sarabun", sans-serif;
`;

const ContainerProps = {
  id: "rmvt",
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  onAnimationComplete: (e) => {
    let transformedDiv = document.querySelector("#rmvt");
    transformedDiv.style.transform = "none";
  },
};

const PreviewEditor = styled.button`
  color: ${({ theme }) => theme.colors.highlight};
  padding: 0.7rem 0.2rem;
  font-weight: 700;
  position: fixed;
  font-size: 0.6rem;
  bottom: 5px;
  right: 5px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 6.2px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

function App() {
  const [Info, setInfo] = useState([]);

  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <motion.div key="131344">
          <motion.div {...ContainerProps}>
            <Infos setInfos={setInfo} />
            <Editor Info={Info} />
            {/* <PreviewEditor onClick={() => dispatch(TogglePreviewVisibility())}>
              Preview
            </PreviewEditor> */}
          </motion.div>
        </motion.div>
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
