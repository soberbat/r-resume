import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setVisibility } from "../../store/textSlice";
import PersonalDetails from "./PersonalDetails";

import SvgRLogo from "../../logo/MyLogo";
export const PageToPrint = React.forwardRef((props, ref) => {
  //STATE

  const { colors } = props;
  const dispatch = useDispatch();
  const visiblity = useSelector((state) => state.values.visibility);
  const jobTitle = useSelector(
    (state) => state.values.values.forms["job-title"]
  );
  const state = useSelector((state) => state.values);
  useEffect(() => {
    document.addEventListener("keydown", () => {
      dispatch(setVisibility({ value: true }));
    });
  });
  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(setVisibility({ value: false })),
      500
    );

    return () => clearTimeout(timer);
  }, [state]);

  //STATE

  const PageToPrint = styled.div`
    overflow: hidden;
    /* border: 1px solid black; */
    height: 90%;
    width: 100%;
    background-color: ${colors.white};
    border-radius: 6px;
    padding: 2rem 3rem;
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.1);
    color: black;
    position: relative;

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
      border-radius: 6px;
    }
    ::-webkit-scrollbar {
      width: 10px;
      background-color: #f5f5f5;
      border-radius: 6px;
      position: absolute;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #000000;
      border: 3px white solid;
      border-radius: 6px;
    }

    @media print {
      font-family: "Sarabun", sans-serif;
      font-size: 20px;
      color: blue;
      height: 298mm;
      width: 210mm;
      ::-webkit-scrollbar {
        width: 0 !important;
      }
    }
  `;

  const SavingScreen = styled(motion.div)`
    background-color: #fdfffc;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    z-index: 100;
  `;

  const AnimatedContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
  `;

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 100, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 4 } },
  };

  const contVars = {
    initial: { opacity: 0 },
    animate: { opacity: 100, transition: { duration: 3 } },
  };

  return (
    <PageToPrint ref={ref}>
      <AnimatePresence>
        {visiblity ? (
          <SavingScreen
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
          />
        ) : (
          ""
        )}
      </AnimatePresence>
      <AnimatedContainer
        variants={contVars}
        animate="animate"
        initial="initial"
      >
        <PersonalDetails></PersonalDetails>
      </AnimatedContainer>
    </PageToPrint>
  );
});
