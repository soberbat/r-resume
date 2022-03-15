import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Title = styled.h1`
  width: 30%;
  font-size: 0.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #525252;
  text-transform: uppercase;
  span {
    padding-bottom: 0.3rem;
    border-bottom: 1px solid black;
  }
`;

const İnfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  span {
    width: 30%;
    font-size: 0.4rem;
    font-weight: 600;
    color: black;
  }
`;
const İnfos = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.7rem;

    h4 {
      font-weight: 600;
      color: #525252;

      font-size: 0.6rem;
    }
    span {
      font-size: 0.6rem;

      font-style: italic;

      font-weight: 300;
      color: #666666;
      text-align: end;
    }
  }

  p {
    width: 100%;
    font-size: 0.6rem;
    font-weight: 300;
    color: #666666;
  }
`;

const Employment = () => {
  return (
    <Container>
      <Title>
        <span> 02 Employment History</span>
      </Title>
      <İnfoContainer>
        <span>03/03/1995-03/04/2022</span>
        <İnfos>
          <div>
            <h4>Worker At heymypet</h4>
            <span>İstanbul</span>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            facilis saepe in similique optio earum vero, hic quos sed labore
            ipsam aliquam necessitatibus quasi obcaecati blanditiis a deserunt
            porro assumenda! Voluptas laboriosam, ipsam iure officiis nulla
            dolore recusandae optio harum quod reiciendis quis quibusdam
            adipisci quasi molestiae suscipit voluptates facere voluptate
          </p>
        </İnfos>
      </İnfoContainer>
    </Container>
  );
};

export default Employment;
