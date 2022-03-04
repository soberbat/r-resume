import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function SectionText({ theState, top, paragraph, defaultVal }) {
  const Header = styled.input`
    font-size: ${top ? "35px" : "1.4rem"};
    border: none;
    color: #00373d;
    outline: none;
    margin-bottom: 0.2rem;

    font-weight: 500;
    width: ${top ? "150px" : "240px"};
  `;
  const HeaderContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: ${top ? "center" : "flex-start"};
    justify-content: center;
    margin-top: ${top ? "0" : "1rem"};
    margin-bottom: 0rem;
    margin-top: 1.5rem;

    span {
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }

    :hover span {
      opacity: 100;
    }
  `;
  const Paragraph = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: 300;
    margin-bottom: 1rem;
    margin-top: 0.1rem;
    line-height: 1.5rem;
  `;

  const handleİnnerTexts = () => {
    if (top) return <></>;
    if (paragraph) return <Paragraph>{paragraph}</Paragraph>;
    if (theState) return <Paragraph>{theState?.description}</Paragraph>;
  };

  const handleHeaderText = () => {
    if (theState) return theState?.header;
    if (defaultVal) return defaultVal;
  };

  return (
    <HeaderContainer>
      <div>
        <Header defaultValue={handleHeaderText()} />
        <span>
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
        </span>
      </div>
      {handleİnnerTexts()}
    </HeaderContainer>
  );
}

export default SectionText;
