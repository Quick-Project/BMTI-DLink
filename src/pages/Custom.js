import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Hand from './../assets/img/customCocktail/handler.png';
import Ice from './../assets/img/customCocktail/decoration/ice_noline.png';

const Glass = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Head = styled.div`
  position: absolute;
  width: 110px;
  height: 240px;
  background-color: #cacaca;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  transform: perspective(10px) rotateX(-1deg);
  z-index: 1;
`;

const HeadCup = styled.div`
  position: relative;
  width: 90px;
  height: 200px;
  background-color: #cacaca;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  transform: perspective(10px) rotateX(-1deg);
  z-index: 1;
`;

const Handler = styled.img`
  position: absolute;
  top: 53%;
`;

const OneColor = styled.div`
  width: 90px;
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: ${(props) => props.color};
`;

const Layer = styled.div`
  width: 90px;
  max-height: 100%;
  max-width: 100%;
  height: ${(props) => `calc(100%/${props.length})`};
  background-color: ${(props) => props.color};
  &.bottomCup {
    border-bottom-left-radius: 38px;
    border-bottom-right-radius: 38px;
  }
`;

const Gradient = styled.div`
  width: 90px;
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background: linear-gradient(180deg, ${(props) => props.colorHex});
`;

const Overlay = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 100px solid rgba(0, 0, 0, 0.2);
  border-top: 100px solid transparent;
  border-left: 45px solid transparent;
  border-right: 45px solid rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  z-index: 1;
`;

const Decoration = styled.div`
  position: absolute;
`;

const Custom = () => {
  const color = ['#FDA749', '#C51C0E', '#3E1210'];
  const makeGradient = (colors) => {
    return colors
      .map((color, index) => {
        return `${color} calc(0% + 100%/${colors.length - 1}*${index} )`;
      })
      .join(',');
  };

  return (
    <Glass>
      <Head />
      <HeadCup>
        <Overlay />
        <Decoration>
          <img src={Ice} alt="ice" />
        </Decoration>
        {/* <OneColor color={color[0]} /> */}
        {/* {color.map((el, idx) => {
          return (
            <Layer
              key={el}
              color={el}
              length={color.length}
              className={idx === color.length - 1 ? 'bottomCup' : null}
            />
          );
        })} */}
        <Gradient length={color.length} colorHex={() => makeGradient(color)} />
      </HeadCup>
      <Handler src={Hand} alt="손잡이" width="150px" height="200px" />
    </Glass>
  );
};

export default Custom;
