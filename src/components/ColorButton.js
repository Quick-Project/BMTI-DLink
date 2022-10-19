import React, { useState } from 'react';
import styled from 'styled-components';
import Color from './Color';
import { useEffect } from 'react';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  background-color: ${(props) => props.color};
  /* background-color: blue; */
  border: 2px solid ${(props) => props.color};
  border-radius: 20px;
  color: white;
  cursor: pointer;
  padding: 10px;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  // hover를 색상을 선택할때마다 변경되는 state에 따라서 변화하게 하고 싶을때
  :hover {
    color: white;
    border: 2px solid white;
    text-shadow: 0 0 3px ${(props) => props.color};
    -webkit-box-shadow: ${(props) => props.color} 0 0 3px,
      inset ${(props) => props.color} 0 0 3px;
    box-shadow: ${(props) => props.color} 0 0 3px,
      inset ${(props) => props.color} 0 0 3px;
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 60px;
  height: 30px;
  border: 2px solid ${(props) => props.color};
  border-radius: 20px;
  color: ${(props) => props.color};
  cursor: pointer;
  padding: 10px;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: bold;

  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  border-radius: 10px;
`;

const ColorButton = ({ pickColor, setPickColor }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      {modalOpen && <Color color={pickColor} setPickColor={setPickColor} />}
      {modalOpen && (
        <CloseButton onClick={showModal} color={pickColor}>
          적용
        </CloseButton>
      )}
      <StyledButton onClick={showModal} color={pickColor}>
        선택
      </StyledButton>
    </div>
  );
};

export default ColorButton;
