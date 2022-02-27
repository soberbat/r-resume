import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export const PageToPrint = React.forwardRef((props, ref) => {
  const { colors } = props;
  const state = useSelector((state) => state.forms.values);
  console.log(state);

  const PageToPrint = styled.div`
    height: 90%;
    background-color: ${colors.gray};
    border-radius: 0.4rem;
    padding: 1.4rem 3rem;
    width: 100%;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.5);
  `;

  return (
    <PageToPrint ref={ref}>
      <h1> title: {state.jobTitle} </h1>
    </PageToPrint>
  );
});
