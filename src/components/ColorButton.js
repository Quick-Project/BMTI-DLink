import React from 'react';
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

const Color = ({ color, setColor }) => {
  return (
    <Container>
      <HexColorPicker color={color} onChange={setColor} />
    </Container>
  );
};

export default Color;
