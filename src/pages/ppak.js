import React from 'react';
import styled from 'styled-components';
import { ppakk } from '../assets/data/dummyData';
//cocktailType
const PpakScreen = ({ cocktailType }) => {
  const ResultContain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 140px;
    @media screen and (max-width: 500px) {
      margin-top: 10px;
    }
  `;

  const ResultImg = styled.img`
    width: 270px;
    height: auto;
    margin-bottom: 10px;
    margin-left: 90px;
  `;

  const Comments = styled.div`
    color: black;
    margin: 5px;
    font-weight: bold;
    word-spacing: 2px;
  `;

  const BmtiTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    align-items: flex-start;
  `;

  const BmtiTitleContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const TrashContent = styled.div`
    font-size: x-large;
    font-weight: bold;
    margin: 50px;
    color: blue;
  `;

  const Test = styled.a`
    margin-top: 50px;
    font-size: medium;
    font-weight: bold;
    color: black;
    text-decoration: none;
    letter-spacing: 1px;
    target: _blank;
    &:hover {
      color: blue;
    }
  `;

  return (
    <div>
      <ResultContain ppakk={ppakk}>
        <ResultImg src={ppakk[0].cocktailImg} />
        <h1>{ppakk[0].cocktail}</h1>

        <BmtiTitle>
          <BmtiTitleContents>
            <Comments>{ppakk[0].comment1}</Comments>
            <Comments>{ppakk[0].comment2}</Comments>
            <Comments>{ppakk[0].comment3}</Comments>
            <Comments>{ppakk[0].comment4}</Comments>
          </BmtiTitleContents>
        </BmtiTitle>
        <Test href="https://www.youtube.com/watch?v=exNk27QCrrs">
          백종원 모히또 만들어보기 →
        </Test>
        <TrashContent>Share Tab</TrashContent>
      </ResultContain>
    </div>
  );
};

export default PpakScreen;
