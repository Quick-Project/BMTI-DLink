import React, { useEffect } from 'react';
import styled from 'styled-components';

const ShareBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: gray;
  border-radius: 50%;
  border: 0;
`;
const KakaoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export default function Kakao({ _title, _sub, _imageUrl, _finalType }) {
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
          description:
            '당신의 BMTI는 무엇인지 궁금하지 않으신가요? 같이 찾아봐요',
          imageUrl:
            'https://cloud-mustang-79a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0496b621-8066-4bf1-bfea-59133e7b706d%2FUntitled.png?table=block&id=05212b9f-aaaf-41bb-9679-32f863f0b01c&width=2000&userId=&cache=v2',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
        buttons: [
          {
            title: '테스트 해줘',
            link: {
              webUrl: 'http://localhost:3000',
            },
          },
          {
            title: '테스트 해줘',
            link: {
              webUrl: 'http://localhost:3000',
            },
          },
        ],
      });
    }
  };

  return (
    <ShareBtn value="KaKao" onClick={shareToKatalk}>
      <KakaoImg
        src={
          'data:image/png;base64,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'
        }
      />
    </ShareBtn>
  );
}
