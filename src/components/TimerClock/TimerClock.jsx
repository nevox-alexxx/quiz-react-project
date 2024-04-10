import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './TimerClock.scss';
import { FinalPage } from '../../pages/FinalPage/FinalPage';

const ONE_MINUTE = 60;
const HALF_MINUTE = 30;
const QUARTER_MINUTE = 15;
const LAST_TIME = 5;

export function TimerClock({ currentReward }) {
  const [secondsDegrees, setSecondsDegrees] = useState(90);
  const [remainingTime, setRemainingTime] = useState(60);
  const [isHurryUp, setIsHurryUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });

      const newSecondsDegrees = ((ONE_MINUTE - remainingTime) / ONE_MINUTE) * 360 + 90;
      setSecondsDegrees(newSecondsDegrees);

      if (
          remainingTime === HALF_MINUTE 
          || remainingTime === QUARTER_MINUTE
          || remainingTime === LAST_TIME
        ) {
        setIsHurryUp(true);
        setTimeout(() => {
          setIsHurryUp(false);
        }, 2500);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  if (remainingTime < 1) {
    return <FinalPage currentReward={currentReward} />
  }

  return (
    <div className={classNames("clock", { "attention": isHurryUp })}>
      <div className="clock-face">
        <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }}></div>
        <div className="center-dot"></div>
      </div>
    </div>
  );
}
