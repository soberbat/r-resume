import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToStore } from "../../store/textSlice";

const İnputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 47%;
  position: relative;
`;

const İnput = styled.input`
  background-color: ${({ theme }) => theme.colors.grayMid};
  border-radius: 3px;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0.92rem 0.4rem;
  width: 100%;
  text-indent: 10px;
  font-weight: 400;
  font-size: 1.2rem;
  :focus {
    outline: none;
  }
`;

const FocusBorder = styled.span`
  height: 3.2px;
  background-color: #1b91f0;
  width: 0%;
  transition: all 0.1s ease-in;
  border-bottom-right-radius: 3.2px;
  border-bottom-left-radius: 3.2px;
  align-self: center;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.1px;
`;

const Additional = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  overflow: hidden;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const ExpandArrow = styled.img`
  width: 0.8rem;
`;
const CollapseArrow = styled.img`
  width: 0.8rem;
`;

const ExpandCollapse = styled(motion.span)`
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

function Additionals() {
  const [isAnimated, setAnimate] = useState(false);

  // ──────────────────────────────────────── Input Props and functions ──────────
  const dispatch = useDispatch();

  const handleFocus = (e) => {
    const border = e.target.nextElementSibling;
    border.style.width = "100%";
  };
  const handleBlur = (e) => {
    const border = e.target.nextElementSibling;
    border.style.width = "0";
  };
  const inputProps = {
    onFocus: (e) => handleFocus(e),
    onBlur: (e) => handleBlur(e),
    onChange: (e) => {
      dispatch(addToStore({ [e.target.id]: e.target.value }));
    },
    autoComplete: "off",
  };

  // ──────────────────────────────────────────────────

  return (
    <>
      <AnimatePresence>
        {isAnimated ? (
          <Additional
            key="modal"
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.6, when: "beforeChildren" },
            }}
            initial={{ height: 0, opacity: 0 }}
            exit={{ height: 0, transition: { duration: 0.4 } }}
          >
            <div key={"1312313"}>
              <İnputContainer>
                <Label>Coutry </Label>
                <İnput id="country" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
              <İnputContainer>
                <Label>City</Label>
                <İnput id="city" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
            </div>
            <div key="w42424">
              <İnputContainer>
                <Label>Address </Label>
                <İnput id="address" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
              <İnputContainer>
                <Label>Driving License</Label>
                <İnput id="driving-license" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
            </div>
            <div key="xfsfsf">
              <İnputContainer>
                <Label>Nationality </Label>
                <İnput id="nationality" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
              <İnputContainer>
                <Label>Date of Birth</Label>
                <İnput id="birth-date" {...inputProps} />
                <FocusBorder />
              </İnputContainer>
            </div>
          </Additional>
        ) : null}
      </AnimatePresence>
      <ExpandCollapse
        onClick={() => {
          setAnimate((prev) => !prev);
        }}
      >
        For more info{" "}
        {isAnimated ? (
          <CollapseArrow src="https://img.icons8.com/ios-glyphs/30/000000/collapse-arrow.png" />
        ) : (
          <ExpandArrow src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png" />
        )}
      </ExpandCollapse>
    </>
  );
}

export default Additionals;
