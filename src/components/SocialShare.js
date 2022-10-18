import React, { useState } from 'react';
import styled from 'styled-components';
import FaceBook from './SocialComponents/FaceBook';
import Kakao from './SocialComponents/Kakao';
import LinkCopy from './SocialComponents/LinkCopy';
import Twitter from './SocialComponents/Twitter';
import PropTypes from 'prop-types';

const ButtonContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: #95d4e2;
  padding: 0.5rem;
`;

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
  width: 800px;
  height: 400px;
`;

// 버튼을 배치시키는 컨테이너
const BtnContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export default function SocialShare({ _title, _sub, _imageUrl }) {
  const [copy, setCopy] = useState(false);
  const onClickCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <FlexContainer>
      <h3>👍 친구에게 결과 공유하기</h3>
      <ButtonContainerMain>
        <BtnContainer>
          {/* 카카오 - props로 결과창의 상태 전달 -> 결과창의 BMTI 혹은 칵테일 imagrUrl => 결과 관련 이미지 */}
          {/* _title -> 결과창의 BMTI 혹은 칵테일 // imagrUrl => 결과 관련 이미지 _sub => */}
          <Kakao _title={_title} _sub={_sub} _imageUrl={_imageUrl} />
          <Twitter _title={_title} _sub={_sub} />
          <FaceBook />
          <LinkCopy onClick={onClickCopy} />
        </BtnContainer>
        {copy && <Copy>주소가 복사되었습니다</Copy>}
        <button>승새가 만들어주는 이쁜버튼(처음으로 다시가기!)</button>
      </ButtonContainerMain>
    </FlexContainer>
  );
}

SocialShare.propTypes = {
  _title: PropTypes.string.isRequired,
  _sub: PropTypes.string.isRequired,
  _imageUrl: PropTypes.string.isRequired,
};
