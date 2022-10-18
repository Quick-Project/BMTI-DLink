import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ProgressBar from './ProgressBar';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const Question_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  height: 30vh;
`;

const Question_wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button_Container = styled.div`
  position: absolute;
  bottom: -300px;
`;

const Question_title = styled.h1`
  margin: 0 auto;
`;

const Question_description = styled.h3`
  word-break: keep-all;
  text-align: center;
  width: 85%;
`;
export default function Question({
  dataList,
  curQuestion,
  buttonClick,
  bmtiPointer,
}) {
  const [count, setCount] = useState(0);
  const [max, setMax] = useState(11);
  const navigate = useNavigate();

  function add_count() {
    if (count === 11) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  function goToLoading() {
    navigate('/loading');
  }
  return (
    <Question_Container>
      {bmtiPointer.length < 4 &&
      !(bmtiPointer.length > 0 && bmtiPointer[0].type.includes('P')) ? (
        <>
          <ProgressBar width={(count / max) * 100 + '%'} />
          <Question_wrap>
            <Question_title>
              {dataList.filter((ele) => ele.id === curQuestion)[0].title}
            </Question_title>
            <Question_description>
              {dataList.filter((ele) => ele.id === curQuestion)[0].question}
            </Question_description>
          </Question_wrap>

          <Button_Container>
            <Button
              choice="L"
              text={dataList.filter((ele) => ele.id === curQuestion)[0].ansL}
              funcProps={(e) => {
                buttonClick(e);
                add_count();
              }}
              height={
                dataList.filter((ele) => ele.id === curQuestion)[0].ansL
                  .length > 25
                  ? '60px'
                  : '40px'
              }
            />
            <Button
              choice="R"
              text={dataList.filter((ele) => ele.id === curQuestion)[0].ansR}
              funcProps={(e) => {
                buttonClick(e);
                add_count();
              }}
              height={
                dataList.filter((ele) => ele.id === curQuestion)[0].ansR
                  .length > 25
                  ? '60px'
                  : '40px'
              }
            />
            {dataList
              .filter((ele) => ele.id === curQuestion)[0]
              .hasOwnProperty('ansP') && (
              <Button
                choice="P"
                text={dataList.filter((ele) => ele.id === curQuestion)[0].ansP}
                funcProps={(e) => {
                  buttonClick(e);
                  setMax(3);
                  add_count();
                }}
              />
            )}
          </Button_Container>
        </>
      ) : (
        goToLoading()
      )}
    </Question_Container>
  );
}

Question.propTypes = {
  dataList: PropTypes.array.isRequired,
  curQuestion: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
  chapter: PropTypes.number.isRequired,
  bmtiPointer: PropTypes.array.isRequired,
};
