import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

function Additionals({ colors }) {
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
    padding: 0.84rem 0.4rem;
    width: 100%;
    text-indent: 10px;
    font-weight: 400;
    :focus {
      outline: none;
    }
  `;

  const Label = styled.label`
    font-size: 0.8rem;
    color: ${colors.lightGray};
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

  return (
    <>
      <AnimatePresence>
        {isAnimated ? (
          <Additional
            key="modal"
            animate={{
              height: "auto",
              opacity: 1,
              transition: { when: "beforeChildren" },
            }}
            initial={{ height: 0, opacity: 0 }}
            exit={{ height: 0 }}
          >
            <motion.div key={"1312313"}>
              <İnputContainer>
                <Label>Wanted Job Title</Label>
                <İnput />
              </İnputContainer>
              <İnputContainer>
                <Label>City</Label>
                <İnput />
              </İnputContainer>
            </motion.div>
            <motion.div key="w42424">
              <İnputContainer>
                <Label>First Name</Label>
                <İnput />
              </İnputContainer>
              <İnputContainer>
                <Label>Last Name</Label>
                <İnput />
              </İnputContainer>
            </motion.div>
            <motion.div key="xfsfsf">
              <İnputContainer>
                <Label>Email</Label>
                <İnput />
              </İnputContainer>
              <İnputContainer>
                <Label>Phone</Label>
                <İnput />
              </İnputContainer>
            </motion.div>
          </Additional>
        ) : null}
      </AnimatePresence>
      <motion.span
        style={{ color: "#00CEE0" }}
        whileHover={{ color: "#00A8B8", transition: { duration: 0.1 } }}
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
