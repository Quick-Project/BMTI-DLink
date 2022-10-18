import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import PropTypes from 'prop-types';

const Question_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  height: 50vh;

  > h1 {
    margin: 0 auto;
  }
`;

const Button_Container = styled.div`
  position: absolute;
  bottom: -30px;
`;

export default function Question({
  dataList,
  curQuestion,
  buttonClick,
  chapter,
  bmtiPointer,
}) {
  const [count, setCount] = useState(0);
  const [max, setMax] = useState(11);

  function add_count() {
    if (count === 11) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <>
      <Question_Container>
        {/* bmti에 담긴것에 P가 있으면 해당 true로 출력 -> P가 있으면 false로 끝 */}
        {/* bmti에 담긴것에 P가 있으면 해당 true로 출력 -> P가 없으면 true로 지속 */}
        {/* {console.log(chapter)} */}
        {bmtiPointer.length < 4 &&
        !(bmtiPointer.length > 0 && bmtiPointer[0].type.includes('P')) ? (
          <>
            <ProgressBar width={(count / max) * 100 + '%'} />
            {/* 질문이 가진 컨텐츠 데이터 바인딩 해주기 */}
            <h1>{dataList.filter((ele) => ele.id === curQuestion)[0].title}</h1>
            <h3>
              {dataList.filter((ele) => ele.id === curQuestion)[0].question}
            </h3>
            {/* <Button_Container>
              <Button />
              <Button />
              {dataList
                .filter((ele) => ele.id === curQuestion)[0]
                .hasOwnProperty('ansP') && <Button />}
            </Button_Container> */}
            <button
              id="L"
              onClick={(e) => {
                add_count();
                buttonClick(e);
              }}
            >
              L테스트 버튼
            </button>
            <button id="R" onClick={buttonClick}>
              R테스트 버튼
            </button>

            {dataList
              .filter((ele) => ele.id === curQuestion)[0]
              .hasOwnProperty('ansP') && (
              <button
                id="P"
                onClick={(e) => {
                  setMax(3);
                  add_count();
                  buttonClick(e);
                }}
              >
                백종원 테스트 버튼
              </button>
            )}
          </>
        ) : null}
      </Question_Container>
    </>
  );
}

Question.propTypes = {
  dataList: PropTypes.array.isRequired,
  curQuestion: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
  chapter: PropTypes.number.isRequired,
  bmtiPointer: PropTypes.array.isRequired,
};
