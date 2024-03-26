import React, { useState, useEffect } from 'react';

import './RewardList.scss';
import rewards from './rewards.json';
// classNAmes

export function RewardList({ step }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(step);
  }, [step]);

  return (
    <div className="reward-list">
      {rewards.map((reward, index) => (
        <div
          key={index}
          className={`reward-card ${activeIndex === index ? 'active' : ''} ${index < activeIndex ? 'not-active' : ''}`}
        >
          {reward.cash}
          <div className='background-line'></div>
        </div>
      ))}
    </div>
  )
}
