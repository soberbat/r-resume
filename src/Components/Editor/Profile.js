import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-top: 2rem;
`;

const Title = styled.h1`
  width: 30%;
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #525252;
  span {
    padding-bottom: 0.3rem;
    border-bottom: 1px solid black;
  }
`;

const Summary = styled.p`
  width: 80%;
  font-size: 0.6rem;
  font-weight: 300;
  color: #666666;
`;

const Profile = () => {
  const ProfessionalSummary = useSelector(
    (state) => state.values.values.forms.summary
  );

  return (
    <Container>
      <Title>
        <span> 01 Profile</span>
      </Title>
      <Summary>{ProfessionalSummary}</Summary>
    </Container>
  );
};

export default Profile;
