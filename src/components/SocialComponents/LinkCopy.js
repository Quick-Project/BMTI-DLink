import React, { useState } from 'react';
import { BiLink } from 'react-icons/bi';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
const ShareBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: gray;
  border-radius: 50%;
  border: 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export default function LinkCopy({ onClick }) {
  const link = process.env.REACT_APP_SHARE_URL;

  return (
    <ShareBtn onClick={onClick}>
      <CopyToClipboard text={link}>
        <BiLink style={{ width: '32px', height: '32px' }} />
      </CopyToClipboard>
    </ShareBtn>
  );
}

LinkCopy.propTypes = {
  onClick: PropTypes.func.isRequired,
};
