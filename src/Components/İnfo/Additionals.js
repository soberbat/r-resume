import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToStore } from "../../store/textSlice";

function Additionals({ colors }) {
  const dispatch = useDispatch();
  const [isAnimated, setAnimate] = useState(false);
  const İnputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 47%;
  `;

  const İnput = styled(motion.input)`
    background-color: ${colors.grayMid};
    border-radius: 3px;
    border: none;
    color: ${colors.gray};
    padding: 1rem 0.4rem;
    width: 100%;
    text-indent: 10px;
    font-weight: 400;
    :focus {
      outline: 1px solid #00cee0;
    }
  `;

  const Label = styled.label`
    font-size: 0.8rem;
    color: ${colors.textColor};
    margin-bottom: 0.5rem;
    font-weight: 400;
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
            <motion.div key={"1312313"}>
              <İnputContainer>
                <Label>City</Label>
                <İnput
                  id="city"
                  onChange={(e) => {
                    dispatch(addToStore({ [e.target.id]: e.target.value }));
                  }}
                />
              </İnputContainer>
              <İnputContainer>
                <Label>Country</Label>
                <İnput
                  id="city"
                  onChange={(e) => {
                    dispatch(addToStore({ [e.target.id]: e.target.value }));
                  }}
                />
              </İnputContainer>
            </motion.div>
            <motion.div key="w42424">
              <İnputContainer>
                <Label>Adress</Label>
                <İnput
                  id="city"
                  onChange={(e) => {
                    dispatch(addToStore({ [e.target.id]: e.target.value }));
                  }}
                />
              </İnputContainer>
              <İnputContainer>
                <Label>Last Name</Label>
                <İnput
                  id="city"
                  onChange={(e) => {
                    dispatch(addToStore({ [e.target.id]: e.target.value }));
                  }}
                />
              </İnputContainer>
            </motion.div>
            <motion.div key="xfsfsf">
              <İnputContainer>
                <Label>Email</Label>
                <İnput
                  id="city"
                  onChange={(e) => {
                    dispatch(addToStore({ [e.target.id]: e.target.value }));
                  }}
                />
              </İnputContainer>
              <İnputContainer>
                <Label>Phone</Label>
                <İnput
                  id="city"
                  onChange={(e) => {
                    dispatch(addToStore({ [e.target.id]: e.target.value }));
                  }}
                />
              </İnputContainer>
            </motion.div>
          </Additional>
        ) : null}
      </AnimatePresence>
      <motion.span
        style={{ color: "#2b66a0", fontWeight: "600", fontSize: 14 }}
        whileHover={{ color: "#5cb4f4", transition: { duration: 0.1 } }}
        onClick={() => {
          setAnimate((prev) => !prev);
        }}
      >
        For more info {isAnimated ? "↑" : "↓"}
      </motion.span>
    </>
  );
}

export default Additionals;
