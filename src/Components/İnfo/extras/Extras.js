import React, { useState } from "react";
import styled from "styled-components";
import SvgHobby from "./svg/Hobby";
import SvgLanguage from "./svg/Language";
import SvgReference from "./svg/Reference";
import Hobbies from "./Hobbies";
import { motion } from "framer-motion";

const Container = styled.section`
  margin-bottom: 5rem;
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
const Header = styled.h1`
  font-size: 1.4rem;
  color: #00373d;
  margin-bottom: 1.4rem;
  font-weight: 500;
`;
const Option = styled.h1`
  color: black;
  font-weight: 300;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  margin-top: 0.2rem;
  width: 47%;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  :hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const AddedExtraSectionContainer = styled.div``;

const Extras = () => {
  const [ExtraSections, setExtraSections] = useState({
    hobbies: false,
    languages: false,
    references: false,
  });
  const [Extraİtems, setExtraİtems] = useState({
    hobbies: <SvgHobby style={{ width: "50px" }} />,
    reference: <SvgReference style={{ width: "50px" }} />,
    language: <SvgLanguage style={{ width: "50px" }} />,
  });
  const handleClick = (e) => {
    setExtraSections((prev) => {
      const newState = {
        ...prev,
        [e.target.id]: !prev[e.target.id],
      };
      return newState;
    });
  };
  const OptionProps = {
    onClick: (e) => handleClick(e),
  };

  return (
    <Container>
      <AddedExtraSectionContainer>
        {ExtraSections.hobbies && <Hobbies />}
      </AddedExtraSectionContainer>
      <Options>
        <Header>Add Section</Header>
        <div>
          {Object.keys(Extraİtems).map((item) => {
            return (
              <Option key={"22323"}>
                <span>{Extraİtems[item]}</span>
                <span id={item} {...OptionProps}>
                  {item[0].toUpperCase() + item.substring(1)}{" "}
                </span>
              </Option>
            );
          })}
        </div>
      </Options>
    </Container>
  );
};
export default Extras;
