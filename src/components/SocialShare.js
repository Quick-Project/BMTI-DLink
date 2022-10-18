import React, { useState } from 'react';
import styled from 'styled-components';
import FaceBook from './SocialComponents/FaceBook';
import Kakao from './SocialComponents/Kakao';
import LinkCopy from './SocialComponents/LinkCopy';
import Twitter from './SocialComponents/Twitter';
import PropTypes from 'prop-types';
import Button from './Button';
import { Link } from 'react-router-dom';
const ButtonContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: #95d4e2;
  padding: 1rem;
  width: 100%;
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

  width: 600px;
  height: 40vh;
  @media screen and (max-width: 500px) {
    width: 85%;
  }
`;

// 버튼을 배치시키는 컨테이너
const BtnContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-evenly;
  align-items: center;
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
        <Link to="/">
          <Button text="한잔 더?" height="50px" />
        </Link>
      </ButtonContainerMain>
    </FlexContainer>
  );
}

SocialShare.propTypes = {
  _title: PropTypes.string.isRequired,
  _sub: PropTypes.string.isRequired,
  _imageUrl: PropTypes.string.isRequired,
};
