import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ width }) {
  return (
    <Container>
      <Progress width={width} />
      <Dot />
    </Container>
  );
}

export default ProgressBar;

const Container = styled.div`
  margin-bottom: 20px;
  background-color: #eee;
  width: 40vw;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const Progress = styled.div`
  background-color: blue;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

//프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
const Dot = styled.div`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border: 10px solid blue;
  border-radius: 35px;
  background: yellow;
  margin-left: -10px;
`;

ProgressBar.propTypes = {
  width: PropTypes.string.isRequired,
};
