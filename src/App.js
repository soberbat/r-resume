import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./logo/index.css";
import Logo from "./logo/Logo";
import Editor from "./Components/Editor";
import Infos from "./Components/İnfos";
import { motion, AnimatePresence } from "framer-motion";
import Overlay from "./Components/Overlay";
import { useFormik } from "formik";

function App() {
  // STATE
  const [colors, setColors] = useState({
    black: "#111218",
    darkGray: "#191C24",
    gray: "#646d83",
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

  // ──────────────────────────────────────── FORMİK ──────────

  const formik = useFormik({
    initialValues: {
      job: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "alooog",
    },
  });

  // ──────────────────────────────────────────────────

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
            <Infos formik={formik} colors={colors} setInfos={setInfo} />
            <Editor formik={formik} colors={colors} Info={Info} />{" "}
          </motion.div>
        </motion.div>
      ) : null}

      <Logo AnimateLogo={AnimateLogo} />
    </MainWrapper>
  );
}

export default App;
