import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RiKakaoTalkFill } from 'react-icons/ri';
const ShareBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: #f9e000;
  border-radius: 50%;
  border: 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
const KakaoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

// _title : 칵테일,_sub : BMTI
export default function Kakao({ _title, _sub, _imageUrl, _url }) {
  useEffect(() => {
    // 카카오톡 sdk 추가
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const shareToKatalk = () => {
    // kakao sdk script 부른 후 window.Kakao로 접근
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      // 카카오에서 제공하는 javascript key를 이용하여 initialize
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_API_URL);
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `나와 어울리는 칵테일은 ${_title}!`,
          description: `나의 BMTI는 ${_sub}에요!
            \n 당신의 BMTI는 무엇인지 궁금하지 않으신가요? 같이 찾아봐요`,
          imageUrl: `${_imageUrl}`,
          link: {
            mobileWebUrl: _url,
            webUrl: _url,
          },
        },
        buttons: [
          {
            title: '인생 칵테일 찾기',
            link: {
              webUrl: _url,
              mobileWebUrl: _url,
            },
          },
        ],
      });
    }
  };

  return (
    <ShareBtn value="KaKao" onClick={shareToKatalk}>
      <RiKakaoTalkFill
        style={{ height: '26px', width: '26px', color: 'white' }}
      />
    </ShareBtn>
  );
}

Kakao.propTypes = {
  _title: PropTypes.string.isRequired,
  _sub: PropTypes.string.isRequired,
  _imageUrl: PropTypes.string.isRequired,
};
