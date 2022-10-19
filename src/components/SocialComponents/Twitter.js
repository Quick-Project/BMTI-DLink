import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BsTwitter } from 'react-icons/bs';
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
// _title => 칵테일 // _sub => BMTI
export default function Twitter({ _title, _sub, _url }) {
  const twitterShareBtn = () => {
    window.open(
      'https://twitter.com/intent/tweet?text=' +
        `저와 어울리는 칵테일은 ${_title}에요! 저의 BMTI ${_sub}에요! 당신의 BMTI는 무엇인지 궁금하지 않으신가요?? 같이 찾아봐요!` +
        '&url=' +
        `${_url}`
    );
  };
  return (
    <ShareBtn onClick={twitterShareBtn}>
      <BsTwitter style={{ height: '26px', width: '26px', color: 'white' }} />
    </ShareBtn>
  );
}

Twitter.propTypes = {
  _title: PropTypes.string.isRequired,
  _sub: PropTypes.string.isRequired,
};
