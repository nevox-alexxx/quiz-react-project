import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import './RewardList.scss';
import rewards from '../../data/rewards.json';

export function RewardList({ step }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(step);
  }, [step]);

  return (
    <div className="reward-list">
      {rewards.map((reward, index) => (
        <>
          <div
            key={index}
            className={classNames('reward-card', {
              'active': activeIndex === index,
              'not-active': index < activeIndex
            })}
          >
            {reward.cash}
          </div>
        </>

      ))}
    </div>
  )
}
