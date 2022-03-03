import React, { useState } from "react";
import styled from "styled-components";
import { addToStore, countWords } from "../../store/textSlice";
import { useSelector, useDispatch } from "react-redux";

const SummaryText = styled.textarea`
  height: 250px;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.grayMid};
  border-radius: 5px;
  border: none;
  color: black;
  resize: none;

  :focus {
    outline: 2px #1b91f0 solid;
  }
`;
const Label = styled.label`
  font-size: 0.86rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;

  span {
    color: black;
    font-size: 1.2rem;
  }
`;
const FocusBorder = styled.span`
  height: 2px;
  background-color: #1b91f0;
  width: 0%;
  transition: all 0.1s ease-in;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 1px;
  align-self: center;
`;

const MiniCont2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.4rem;
  width: 100%;
`;

const MiniCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: flex-start;
`;

const TextArea = () => {
  const count = useSelector(
    (state) => state.forms.countedWords.textAreaEmploymentHistoryCount
  );
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(addToStore({ [e.target.id]: e.target.value }));
    dispatch(countWords({ [e.target.id + "Count"]: e.target.value.length }));
  };

  return (
    <MiniCont>
      <Label>Wanted Job Title </Label>
      <SummaryText
        onChange={(e) => handleChange(e)}
        id="textAreaEmploymentHistory"
        key={"ben-keyi-değişmeyenim"}
        defaultValue={value}
      ></SummaryText>
      <MiniCont2>
        <Label>
          Recruiter Tip : write 200+ characters to increase interview chances{" "}
        </Label>
        <Label>
          {" "}
          <span> {count}</span> /200+
        </Label>
      </MiniCont2>
    </MiniCont>
  );
};

export default TextArea;
