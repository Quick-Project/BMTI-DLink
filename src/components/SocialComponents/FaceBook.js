import React from 'react';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';

const ShareBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: #1c9bef;
  border-radius: 50%;
  border: 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export default function FaceBook({ _url }) {
  const twitterShareBtn = () => {
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + _url);
  };
  return (
    <ShareBtn onClick={twitterShareBtn}>
      <FaFacebookF style={{ height: '26px', width: '26px', color: 'white' }} />
    </ShareBtn>
  );
}
