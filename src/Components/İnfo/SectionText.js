import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

function SectionText({ defaultVal, top }) {
  const [penİsVisible, setPenİsVisible] = useState(false);
  const HeaderContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: ${top ? "center" : "start"};
    margin-top: ${top ? "0" : "1rem"};
    margin-bottom: 0.5rem;
  `;
  const Header = styled.input`
    font-size: ${top ? "40px" : "1.2rem"};
    border: none;
    color: #00373d;
    outline: none;
    margin-bottom: 0.4rem;
    font-weight: 600;
    width: ${top ? "140px" : "200px"};
  `;
  return (
    <HeaderContainer>
      <Header
        onMouseEnter={() => setPenİsVisible(true)}
        onMouseLeave={() => setPenİsVisible(false)}
        defaultValue={defaultVal}
      />

      {penİsVisible && (
        <motion.span
          animate={{ opacity: 100, transition: { duration: 2 } }}
          initial={{ opacity: 0 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#D5D5DC"
            class="bi bi-pen"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
          </svg>
        </motion.span>
      )}
    </HeaderContainer>
  );
}

export default SectionText;
