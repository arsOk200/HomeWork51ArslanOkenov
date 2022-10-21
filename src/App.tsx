import React from 'react';

import './App.css';


function App() {
  let lotoArray = ['5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36'];
  let usedLotoArray:string[] = [];
  let temporaryArray:string[] = [];
  const mainIdea =() => {

      for(let i = 0; i < 5; i++ ) {
        const random = Math.floor(Math.random()*lotoArray.length);
        let arr =  lotoArray.indexOf(lotoArray[random]);
        let usednumbers = lotoArray.splice(arr, 1);
        temporaryArray.push(usednumbers+' ');
      }
      usedLotoArray.push(temporaryArray+' ');
      temporaryArray.sort((a, b) => Number(a) - Number(b));
      console.log("что должно быть на экране "+temporaryArray);
      temporaryArray = [];
      console.log("не повторится "+usedLotoArray);
  };

  return (
    <div className="App">

      <h1>Loto</h1>
      <button className="btn" onClick={mainIdea}>New </button>
    </div>
  );
}

export default App;
