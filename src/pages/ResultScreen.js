import React from 'react';
import styled from 'styled-components';
import { cocktailData, dataList, showMoreBmti } from '../data/dummyData';
import SocialShare from '../components/SocialShare';
import Graph from '../components/Graph';

const ResultContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ResultImg = styled.img`
  width: 270px;
  height: auto;
  margin-bottom: 10px;
`;

const TitleCocktail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media screen and (max-width: 500px) {
    width: 85%;
  }
`;

const BmtiImg = styled.img`
  width: 220px;
  height: 220px;
  margin: 20px;
`;

const Comments = styled.div`
  color: black;
  margin: 5px;
`;

const CocktailComments = styled.div`
  font-size: auto;
  color: black;
  margin: 5px;
`;

const MidBmtiComments = styled.div`
  margin-top: 60px;
  margin-bottom: 0em;
`;

const HilightBmtiContain = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: baseline;
`;

const HilightBmitComments = styled.div`
  margin: 20px 5px 0 0;
  font-size: 26px;
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
  flex-direction: row;
  align-items: center;
`;

const HilightComments = styled.div`
  font-weight: bold;
  margin: 5px 5px 5px 0;
`;

const BmtiContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  text-align: center;
`;

const BmtiViewMoreTitle = styled.div`
  margin: 30px 0 10px 0;
  font-size: x-large;
`;

const BmtiViewMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  text-align: center;
`;

const ShareContents = styled.div`
  font-size: x-large;
  font-weight: bold;
  margin: 50px;
  color: blue;
`;

const ResultScreen = () => {
  return (
    <div>
      <ResultContain cocktailData={cocktailData}>
        <div>당신에게 추천할 칵테일은 바로</div>
        <h1>{`" ${cocktailData[0].cocktail} "`}</h1>
        {console.log(cocktailData[0].cocktail)}

        <ResultImg src={cocktailData[0].cocktailImg} />

        <TitleCocktail>
          <CocktailComments>• {cocktailData[0].comment1}</CocktailComments>
          <CocktailComments>• {cocktailData[0].comment2}</CocktailComments>
          <CocktailComments>• {cocktailData[0].comment3}</CocktailComments>
        </TitleCocktail>

        <MidBmtiComments>당신의 BMTI 성향은?</MidBmtiComments>
        <HilightBmtiContain>
          <HilightBmitComments>
            [ {cocktailData[0].bmtiResult} ]
          </HilightBmitComments>
          <Comments>입니다!</Comments>
        </HilightBmtiContain>
        <Graph />

        <ShareContents>
          <SocialShare
            _title={'DEEP'}
            _sub={'파우스트'}
            _imageUrl={
              'https://cloud-mustang-79a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0496b621-8066-4bf1-bfea-59133e7b706d%2FUntitled.png?table=block&id=05212b9f-aaaf-41bb-9679-32f863f0b01c&width=2000&userId=&cache=v2'
            }
          />
        </ShareContents>

        <BmtiTitle>
          <BmtiTitleContents>
            <HilightComments>
              {`${cocktailData[0].bmtiComment1}의 성향을 가진 당신!`}
            </HilightComments>
            <div>{`그리고`}</div>
          </BmtiTitleContents>
          <BmtiTitleContents>
            <HilightComments>{`" ${cocktailData[0].bmtiComment2} "`}</HilightComments>
            <Comments>{cocktailData[0].bmtiComment3}은?</Comments>
          </BmtiTitleContents>
        </BmtiTitle>

        <BmtiImg src={cocktailData[0].bmtiImg} />

        <BmtiContents>
          <Comments>{cocktailData[0].bmtiComment4}</Comments>
          <Comments>{cocktailData[0].bmtiComment5}</Comments>
          <HilightComments>{cocktailData[0].bmtiComment6}</HilightComments>
          <Comments>{cocktailData[0].bmtiComment7}</Comments>
          <Comments>{cocktailData[0].bmtiComment8}</Comments>
        </BmtiContents>

        <BmtiViewMoreTitle>성향 해설</BmtiViewMoreTitle>
        <BmtiViewMore>
          <Comments>
            {showMoreBmti[0].type}({showMoreBmti[0].fullType}) :{' '}
            {showMoreBmti[0].comment}
          </Comments>
          <Comments>
            {showMoreBmti[2].type}({showMoreBmti[2].fullType}) :{' '}
            {showMoreBmti[2].comment}
          </Comments>
          <Comments>
            {showMoreBmti[5].type}({showMoreBmti[5].fullType}) :{' '}
            {showMoreBmti[5].comment}
          </Comments>
          <Comments>
            {showMoreBmti[6].type}({showMoreBmti[6].fullType}) :{' '}
            {showMoreBmti[6].comment}
          </Comments>
        </BmtiViewMore>
        <br />
        <ShareContents>
          <SocialShare
            _title={'DEEP'}
            _sub={'파우스트'}
            _imageUrl={
              'https://cloud-mustang-79a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0496b621-8066-4bf1-bfea-59133e7b706d%2FUntitled.png?table=block&id=05212b9f-aaaf-41bb-9679-32f863f0b01c&width=2000&userId=&cache=v2'
            }
          />
        </ShareContents>
      </ResultContain>
    </div>
  );
};

export default ResultScreen;
