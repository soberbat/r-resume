import React, { useState } from "react";
import styled from "styled-components";

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
  margin-bottom: 0.3rem;
  font-weight: 500;
`;
const Option = styled.h1`
  color: black;
  font-weight: 300;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  margin-top: 0.2rem;
  width: 47%;
  display: flex;
  align-items: center;

  /* span {
    margin-right: 0.6rem;
    font-size: 2rem;
  } */
`;

const Extras = () => {
  return (
    <Container>
      <Options>
        <Header>Add Section</Header>
        <div>
          <Option>
            <span>
              <img src="https://img.icons8.com/cute-clipart/50/000000/language.png" />
            </span>
            Languages
          </Option>
          <Option>
            <span>
              <img src="https://img.icons8.com/external-flat-geotatah/64/000000/external-citation-customer-engagement-flat-flat-geotatah.png" />
            </span>
            References
          </Option>
          <Option>
            <span>
              <img src={hobby} alt="" />
            </span>
            Hobbies
          </Option>
        </div>
      </Options>
    </Container>
  );
};

export default Extras;
