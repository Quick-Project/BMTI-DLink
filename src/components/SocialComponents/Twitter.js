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

export default function Twitter({ _title, _sub }) {
  const twitterShareBtn = () => {
    window.open(
      'https://twitter.com/intent/tweet?text=' +
        `저의 BMTI는 ${_title}이며, 어울리는 칵테일은 ${_sub}에요 당신에게 어울리는 칵테일도 찾아볼까요?` +
        '&url=' +
        process.env.REACT_APP_SHARE_URL
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
