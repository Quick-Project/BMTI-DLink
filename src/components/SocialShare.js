import React, { useState } from 'react';
import styled from 'styled-components';
import Kakao from './SocalComponents/Kakao';
import LinkCopy from './SocalComponents/LinkCopy';

const Copy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  width: 200px;
  height: 2rem;
  font-size: large;
  font-weight: bold;
  opacity: 0.5;
  border-radius: 8px;
  background-color: #cfcfcf;
  top: 140px;
`;
// 제목과 버튼을 감싸는 컨테이너
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 버튼을 배치시키는 컨테이너
const BtnContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 16px;
`;

export default function SocialShare() {
  const [copy, setCopy] = useState(false);
  const onClickCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <FlexContainer>
      <h1>공유하기</h1>
      <BtnContainer>
        <Kakao />
        <button>2</button>
        <button>3</button>
        <LinkCopy onClick={onClickCopy} />
      </BtnContainer>
      {copy && <Copy>주소가 복사되었습니다</Copy>}
    </FlexContainer>
  );
}
