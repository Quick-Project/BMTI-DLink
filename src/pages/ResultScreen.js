import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { cocktailData, dataList, showMoreBmti } from '../assets/data/dummyData';
import SocialShare from '../components/SocialShare';
import Graph from '../components/Graph';

const ResultContain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
  border: 1px solid red;
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
  color: black;
  margin-top: 40px;
`;

const ResultScreen = ({ cocktailType, MBTIdata, setCocktailType }) => {
  const [bmtiData, setBMTIdata] = useState(MBTIdata());

  let filter = cocktailData.filter((ele) => {
    return cocktailType.type === ele.type;
  });

  if (filter.length > 1) {
    const type = cocktailType.type;
    const point = cocktailType.point;

    const filtered = (item) => {
      return cocktailData.filter((ele) => item === ele.cocktail);
    };

    switch (type) {
      case 'BDCF':
        filter = point[0] > 1 ? filtered('파우스트') : filtered('맨해튼');
        break;
      case 'BLCT':
        filter = point[3] > 1 ? filtered('진 토닉') : filtered('소맥');
        break;
      case 'BDMT':
        filter = point[1] > 2 ? filtered('마가리타') : filtered('블랙러시안');
        break;
      case 'SLCT':
        filter =
          point[1] > 1 ? filtered('피치크러시') : filtered('스크류 드라이버');
        break;
      case 'SLMT':
        filter = point[0] > 1 ? filtered('하이볼') : filtered('잭콕');
        break;
    }
  }

  const bmtiDetail = showMoreBmti.filter((x) =>
    cocktailType.type.includes(x.type)
  );

  return (
    <ResultContain>
      <div>당신에게 추천할 칵테일은 바로</div>
      <h1>{`" ${filter[0].cocktail} "`}</h1>
      {console.log(filter[0].cocktail)}

      <ResultImg src={filter[0].cocktailImg} />

      <TitleCocktail>
        <CocktailComments>• {filter[0].comment1}</CocktailComments>
        <CocktailComments>• {filter[0].comment2}</CocktailComments>
        <CocktailComments>• {filter[0].comment3}</CocktailComments>
      </TitleCocktail>

      <MidBmtiComments>당신의 BMTI 성향은?</MidBmtiComments>
      <HilightBmtiContain>
        <HilightBmitComments>[ {filter[0].type} ]</HilightBmitComments>
        <Comments>입니다!</Comments>
      </HilightBmtiContain>
      <Graph BMTI={bmtiData} />

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
            {`${filter[0].bmtiComment1}의 성향을 가진 당신!`}
          </HilightComments>
          <div>{`그리고`}</div>
        </BmtiTitleContents>
        <BmtiTitleContents>
          <HilightComments>{`" ${filter[0].bmtiComment2} "`}</HilightComments>
          <Comments>{filter[0].bmtiComment3}은?</Comments>
        </BmtiTitleContents>
      </BmtiTitle>

      <BmtiImg src={filter[0].bmtiImg} />

      <BmtiContents>
        <Comments>{filter[0].bmtiComment4}</Comments>
        <Comments>{filter[0].bmtiComment5}</Comments>
        <HilightComments>{filter[0].bmtiComment6}</HilightComments>
        <Comments>{filter[0].bmtiComment7}</Comments>
        <Comments>{filter[0].bmtiComment8}</Comments>
      </BmtiContents>
      {/* -------------------------------이 아래는 또 다른 로직으로 접근해야할 거 같은데 모르겠군요------------------------------------------------- */}
      {/*  type = 'BMTI' type[0] B === showmodsflkj[0].type 'B' */}
      {/* cocktailType */}
      <BmtiViewMoreTitle>성향 해설</BmtiViewMoreTitle>
      <BmtiViewMore>
        <Comments>
          {bmtiDetail[0].type}({bmtiDetail[0].fullType}) :{' '}
          {bmtiDetail[0].comment}
        </Comments>
        <Comments>
          {bmtiDetail[1].type}({bmtiDetail[1].fullType}) :{' '}
          {bmtiDetail[1].comment}
        </Comments>
        <Comments>
          {bmtiDetail[2].type}({bmtiDetail[2].fullType}) :{' '}
          {bmtiDetail[2].comment}
        </Comments>
        <Comments>
          {bmtiDetail[3].type}({bmtiDetail[3].fullType}) :{' '}
          {bmtiDetail[3].comment}
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
  );
};

export default ResultScreen;