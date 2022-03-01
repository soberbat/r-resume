import React, { useState } from "react";

import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ContentContainer = styled.div`
  height: ${(props) => (props.isExpanded ? "500px" : "0px")};
  overflow: hidden;
  padding: 0 1rem;
  transition: all 0.6s ease-in-out;
`;
const Container = styled.div`
  border: 0.9px solid gainsboro;
  border-radius: 3px;
  color: black;
  position: relative;
  display: ${(props) => (props.ContainerExist ? "block" : "none")};
  opacity: ${(props) => (props.isVisible ? "100" : "0")};
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s all;
  :hover img {
    opacity: 100;
  }
`;
const ExpandArrow = styled.img`
  width: 0.8rem;
`;
const CollapseArrow = styled.img`
  width: 0.8rem;
`;

const ExpandCollapse = styled(motion.span)`
  color: blue;
  font-weight: 500;
  height: 75px;
  padding: 1rem;
  font-size: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
const Deleteİmg = styled.img`
  width: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: -30px;
  bottom: 27px;
  opacity: 0;
  transition: all 0.5s ease-in;
`;

export const Accordion = ({ colors }) => {
  const [isExpanded, setİsExpanded] = useState(false);
  const [isVisible, setİsVisible] = useState(true);
  const [ContainerExist, setİsContainerExist] = useState(true);

  const handleDelete = () => {
    setİsVisible(!isVisible);
    setİsContainerExist(!ContainerExist);
    console.log("dhanana");
  };

  const imgProps = {
    src: "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png",
    onClick: handleDelete,
  };

  const contProps = {
    ContainerExist: ContainerExist,
    isVisible: isVisible,
  };

  return (
    <Container {...contProps}>
      <Deleteİmg {...imgProps}></Deleteİmg>
      <ExpandCollapse
        style={{ color: colors.gray, fontSize: ".8rem" }}
        onClick={() => {
          setİsExpanded(!isExpanded);
        }}
      >
        (Not Specified)
        {isExpanded ? (
          <CollapseArrow src="https://img.icons8.com/ios-glyphs/30/000000/collapse-arrow.png" />
        ) : (
          <ExpandArrow src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png" />
        )}
      </ExpandCollapse>
      <ContentContainer isExpanded={isExpanded}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam sed
        nihil maxime tempore ipsam illo, eius aliquid eum aspernatur dolorem
        modi minima perspiciatis laborum neque odit dolores soluta repellendus.
        Quisquam recusandae rerum impedit magnam molestias dolore! Assumenda
        unde accusantium ipsa facere amet at nesciunt debitis nostrum dolores
        consectetur, aspernatur eius natus iure omnis dicta obcaecati autem
        laboriosam dolore corporis.
      </ContentContainer>
    </Container>
  );
};
