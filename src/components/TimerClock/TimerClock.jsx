import React, { useState, useEffect } from 'react';
import './TimerClock.scss';
import { FinalPage } from '../FinalScreen/FinalPage';

export function TimerClock({ currentReward }) {
  const [secondsDegrees, setSecondsDegrees] = useState(90);
  const [remainingTime, setRemainingTime] = useState(60);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isHurryUp, setIsHurryUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          setIsTimeUp(true);
          return 0;
        }
        return prevTime - 1;
      });

      const newSecondsDegrees = ((60 - remainingTime) / 60) * 360 + 90;
      setSecondsDegrees(newSecondsDegrees);

      if (remainingTime === 30 || remainingTime === 15 || remainingTime === 5) {
        setIsHurryUp(true);
        setTimeout(() => {
          setIsHurryUp(false);
        }, 2500);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  if (isTimeUp) {
    console.log('Time is end!')
  }

  return (
    <>
      {remainingTime > 0 ? (
        <div className={"clock" + (isHurryUp ? " attention" : "")}>
          <div className="clock-face">
            <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }}></div>
            <div className="center-dot"></div>
          </div>
        </div>
      ) : (
        <FinalPage currentReward={currentReward} />)
      }
    </>
  );
}
