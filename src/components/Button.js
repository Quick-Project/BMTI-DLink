import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #449ff7;
  width: 310px;
  height: ${(props) => props.height || '40px'};
  color: white;
  border-radius: 15px;
  font-size: 16px;
  text-align: center;
  border: 0;
  outline: 0;
  margin-bottom: 25px;
  font-weight: bold;
  text-decoration: none;
  :hover {
    background-color: #87c4ff;
  }
`;

const Button = ({ text, funcProps, height }) => {
  return (
    <StyledButton onClick={funcProps} height={height}>
      {text}
    </StyledButton>
  );
};

export default Button;
