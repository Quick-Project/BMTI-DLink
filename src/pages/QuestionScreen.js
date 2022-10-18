import React, { useState } from 'react';

import Question from '../components/Question';

import { dataList } from '../assets/data/dummyData';

function QuestionScreen({ cocktailType, cockTailSetting }) {
  const [chapter, setChatper] = useState(0);
  const [curQuestion, setCurQuestion] = useState('i');
  const [bmtiPointer, setBmtiPointer] = useState([]);

  const buttonClick = (e) => {
    if (e.target.id === 'P') {
      setChatper(4);
      setCurQuestion('i');
    } else {
      setCurQuestion((prev) => {
        if (prev.length === 3) {
          let nextId = prev + e.target.id;
          let filter = dataList[chapter].filter((ele) => ele.id === nextId);
          setBmtiPointer([...bmtiPointer, ...filter]);
          setChatper((chapter) => chapter + 1);
          cockTailSetting({
            type: cocktailType.type + filter[0].type,
            point: [...cocktailType.point, filter[0].point],
          });
          return setCurQuestion('i');
        }
        return prev + e.target.id;
      });
    }
  };

  return (
    <div>
      <span>
        <Question
          cocktailType={cocktailType}
          cockTailSetting={cockTailSetting}
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

export default QuestionScreen;
