import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    console.log('running');
    let timerintervel;
    if (running) {
      timerintervel = setTimeout(() => {
        if (sec == 60) {
          setSec(0);
          if (min == 60) {
            setMin(0);
          } else {
            setMin(min + 1);
          }
        } else {
          setSec(sec + 1);
        }
      }, 1000);
    } else {
      clearInterval(timerintervel);
    }
    return () => {
      clearInterval(timerintervel);
    };
  });
  return (
    <div>
      {min} : {sec}
      <button onClick={() => setRunning(true)}>start</button>
      <button onClick={() => setRunning(false)}>pause</button>
      <button
        onClick={() => {
          setSec(0);
          setMin(0);
          setRunning(false);
        }}
      >
        reset
      </button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
