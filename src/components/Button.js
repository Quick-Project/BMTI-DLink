import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #449ff7;
  width: 310px;
  height: 40px;
  color: white;
  border-radius: 15px;
  font-size: 16px;
  text-align: center;
  border: 0;
  outline: 0;
  margin: 30px;
  font-weight: bold;
  :hover {
    background-color: #87c4ff;
  }
  .stateProps {
    height: 80px;
  }
`;

const Button = (props, funcProps, stateProps) => {
  const func = () => {};

  return (
    <div>
      <StyledButton onClick={func} className={stateProps}>
        달달한 술이 좋아!
      </StyledButton>
      <StyledButton onClick={func} className={stateProps}>
        술은 써야 술이지!
      </StyledButton>
    </div>
  );
};

export default Button;
