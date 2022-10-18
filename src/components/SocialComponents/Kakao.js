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

export default function Kakao({ _title, _sub, _imageUrl }) {
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
          title: `저의 BMTI는 ${_title}이에요`,
          description: ` 저와 어울리는 칵테일은 ${_sub}에요!
            \n 당신의 BMTI는 무엇인지 궁금하지 않으신가요? 같이 찾아봐요`,
          imageUrl: `${_imageUrl}`,
          link: {
            mobileWebUrl: 'process.env.REACT_APP_SHARE_URL',
            webUrl: 'process.env.REACT_APP_SHARE_URL',
          },
        },
        buttons: [
          {
            title: '테스트 해줘',
            link: {
              webUrl: process.env.REACT_APP_SHARE_URL,
            },
          },
          {
            title: '테스트 해줘',
            link: {
              webUrl: process.env.REACT_APP_SHARE_URL,
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
