import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ColorButton from '../components/ColorButton';

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

const Custom_wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PatternButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin: 15px;
  background-color: white;
  font-weight: bold;
  /* background-color: blue; */
  border: 2px solid pink;
  border-radius: 10px;
  color: pink;
  cursor: pointer;
  padding: 10px;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  :hover {
    color: white;
    background-color: pink;
    border: 2px solid white;
    text-shadow: 0 0 3px pink;
    -webkit-box-shadow: pink 0 0 3px, inset pink 0 0 3px;
    box-shadow: red 0 0 3px, inset pink 0 0 3px;
  }
`;

const Btn_wrap = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: end;
  margin-top: 650px;
`;

const Custom = () => {
  const [pickColor, setPickColor] = useState(['pink']);
  const [pattern, setPattern] = useState([]);

  console.log(pickColor);
  const patternList = ['mono', 'gradient', 'layer'];
  const color = [pickColor[0], 'red', 'blue'];

  const makeGradient = (colors) => {
    return colors
      .map((color, index) => {
        return `${color} calc(0% + 100%/${colors.length - 1}*${index} )`;
      })
      .join(',');
  };

  return (
    <>
      <Custom_wrap>
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
            <Gradient
              length={color.length}
              colorHex={() => makeGradient(color)}
            />
          </HeadCup>
          <Handler src={Hand} alt="손잡이" width="150px" height="200px" />
        </Glass>
        <ColorButton pickColor={pickColor} setPickColor={setPickColor} />
        <Btn_wrap>
          <PatternButton
            onClick={() => {
              setPattern(patternList[0]);
            }}
          >
            {patternList[0]}
          </PatternButton>
          <PatternButton
            onClick={() => {
              setPattern(patternList[1]);
            }}
          >
            {patternList[1]}
          </PatternButton>
          <PatternButton
            onClick={() => {
              setPattern(patternList[2]);
            }}
          >
            {patternList[2]}
          </PatternButton>
        </Btn_wrap>
      </Custom_wrap>
    </>
  );
};

export default Custom;
