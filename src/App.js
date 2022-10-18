import React, { useState } from 'react';
import SocialShare from './components/SocialShare';
import ProgressBar from './components/ProgressBar';
import Graph from './components/Graph';
import Question from './pages/Question';

import { dataList, dataList2 } from './data/dummyData.js';

function App() {
  // 로직 => 질문은 총 5가지로 정해져있음. BMTI 별 인덱스 관리할 상태 필요
  // id를 계속 확인할 상태 필요
  // 백종원 루트가 나온다면 챕터를 마지막으로 보내야함 ->
  // 챕터 3까지 하고 끝내야됨.
  // 백종원 루트 생각났어여! 오 굿굿
  // setBmtiPointer배열길이가 4이상이거나
  // chapter가 5가 되면 없애버리죠! ㅋㅋㅋㅋ 한번 수정해볼게용!네네~!!
  const [chapter, setChatper] = useState(0);
  const [curQuestion, setCurQuestion] = useState('i');
  const [bmtiPointer, setBmtiPointer] = useState([]);

  const buttonClick = (e) => {
    if (e.target.id === 'P') {
      setChatper(4);
      setCurQuestion('i');
      // 지금 줌소리랑 겹쳐서 끝나고 말씀드리고 한번 바꿔볼까요??
    } else {
      setCurQuestion((prev) => {
        if (prev.length === 3) {
          let nextId = prev + e.target.id;
          setBmtiPointer([
            ...bmtiPointer,
            ...dataList[chapter].filter((ele) => ele.id === nextId),
          ]);
          setChatper((chapter) => chapter + 1);

          return setCurQuestion('i');
        }
        return prev + e.target.id;
      });
    }
  };

  console.log(bmtiPointer);
  console.log(curQuestion);

  return (
    <div>
      <span>
        <Question
          dataList={dataList[chapter]}
          curQuestion={curQuestion}
          buttonClick={buttonClick}
          chapter={chapter}
          bmtiPointer={bmtiPointer}
        />
      </span>
    </div>
  );
}
export default App;
