import React from 'react';
import SocialShare from './components/SocialShare';
import ProgressBar from './components/ProgressBar';
import Graph from './components/Graph';
import ResultScreen from './pages/ResultScreen';
import Ppak from './pages/ppak';

function App() {
  const hi = 'hi';
  return (
    <div>
      {/* <Ppak /> */}
      <ResultScreen />
      <span>
        {/* <SocialShare
          _title={'DEEP'}
          _sub={'파우스트'}
          _imageUrl={
            'https://cloud-mustang-79a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0496b621-8066-4bf1-bfea-59133e7b706d%2FUntitled.png?table=block&id=05212b9f-aaaf-41bb-9679-32f863f0b01c&width=2000&userId=&cache=v2'
          }
        /> */}
      </span>
    </div>
  );
}
export default App;
