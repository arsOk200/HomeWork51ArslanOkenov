import React from 'react';

interface BallProps {
  ball:string[];
}

const Ball:React.FC<BallProps> = (props) => {
  return (
    <div className="header">
      {props.ball.map(el => <p className="ball">{el}</p>)}
    </div>
  );
};

export default Ball;