import React, { useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
`;

const Color = ({ pickColor, setPickColor }) => {
  {
    pickColor;
  }
  return (
    <Container>
      <HexColorPicker color={pickColor} onChange={setPickColor} />
    </Container>
  );
};

export default Color;
