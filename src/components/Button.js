import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #449ff7;
  width: 310px;
  word-break: keep-all;
  height: ${(props) => props.height || '40px'};
  color: white;
  border-radius: 15px;
  font-size: 16px;
  text-align: center;
  border: 0;
  outline: 0;
  margin: 0 0 25px 0;
  padding: 15px;
  font-weight: bold;
  text-decoration: none;
  :hover {
    background-color: #87c4ff;
  }
`;

const Button = ({ choice, text, funcProps = function () {}, height }) => {
  return (
    <StyledButton id={choice} onClick={(e) => funcProps(e)} height={height}>
      {text}
    </StyledButton>
  );
};

export default Button;
