import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const Container = styled.div``;
const NameTitleContainer = styled.div`
  h1 {
    font-size: 4rem;
  }
  span {
    font-size: 0.8rem;
    margin-top: 5rem;
  }
`;
const PersonalDetails = () => {
  const PersonalDetailsValues = useSelector(
    (state) => state.values.values.forms
  );

  return (
    <Container>
      <NameTitleContainer>
        <h1>
          {PersonalDetailsValues.name && PersonalDetailsValues.name}{" "}
          {PersonalDetailsValues["last-name"] &&
            PersonalDetailsValues["last-name"]}{" "}
        </h1>
        <span>{PersonalDetailsValues[`job-title`]}</span>
      </NameTitleContainer>
    </Container>
  );
};

export default PersonalDetails;
