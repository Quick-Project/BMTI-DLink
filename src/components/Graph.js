import styled from 'styled-components';
import React from 'react';

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Graph_wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  position: relative;
  background-color: rgba(eee, 0.3);
  height: 150px;
  width: 500px;
`;

const Bar = styled.div`
  width: 20px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  margin: 0 15px;
  border-radius: 5px;
  position: relative;

  > span:nth-child(1) {
    width: 20px;
    font-size: 20px;
    position: absolute;
    bottom: -35px;
    text-align: center;
  }
  > span:nth-child(2) {
    width: 20px;
    font-size: 15px;
    position: absolute;
    top: -20px;
    text-align: center;
  }
`;
const Line = styled.div`
  position: absolute;
  height: 3px;
  background: linear-gradient(to right, #aee4ff, #ffafb8, #caa5fe, #dfd4e4);
  height: 5px;
  width: 170px;
  bottom: -3px;
`;
// 유동적인 스타일을 위한 BMIT 더미 데이터입니다.
const BMTI = [
  { type: 'S', point: 3 },
  { type: 'L', point: 2 },
  { type: 'C', point: 3 },
  { type: 'T', point: 2 },
];

const Graph = ({ MBTI }) => {
  console.log(MBTI);
  return (
    <GraphContainer>
      <Graph_wrap>
        <Bar
          height={`${BMTI[0].point * 30}px`}
          color="#aee4ff"
          borderColor="#AEBAFF"
        >
          <span>
            <strong> {BMTI[0].type} </strong>
          </span>
          <span> {BMTI[0].point} </span>
        </Bar>
        <Bar
          height={`${BMTI[1].point * 30}px`}
          color="#ffafb8"
          borderColor="#FF84B8"
        >
          <span>
            <strong> {BMTI[1].type} </strong>
          </span>
          <span> {BMTI[1].point} </span>
        </Bar>
        <Bar
          height={`${BMTI[2].point * 30}px`}
          color="#caa5fe"
          borderColor="#CA7FFE"
        >
          <span>
            <strong> {BMTI[2].type} </strong>
          </span>
          <span> {BMTI[2].point} </span>
        </Bar>
        <Bar
          height={`${BMTI[3].point * 30}px`}
          color="#dfd4e4"
          borderColor="#DACAD9"
        >
          <span>
            <strong> {BMTI[3].type} </strong>
          </span>
          <span> {BMTI[3].point} </span>
        </Bar>
        <Line />
      </Graph_wrap>
    </GraphContainer>
  );
};

export default Graph;
