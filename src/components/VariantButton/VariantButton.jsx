import React, { useState } from 'react';
import classNames from 'classnames';

import './VariantButton.scss';

export function VariantButton({ task, onClickVariant, getButtonClass }) {
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleClick = (index) => {
    onClickVariant(index);
    setFocusedIndex(index);
    
    setTimeout(() => {
      setFocusedIndex(null);
    }, 2000);
  };

  return (
    <div className='grid-btn'>
      {task.variants?.map((text, index) => (
        <button
          onClick={() => handleClick(index)}
          key={index}
          className={classNames(getButtonClass(index), { 'focus': index === focusedIndex })}
        >
          <p>
            <b className='variant-letter'>{task.letter[index]} </b>
            {text}
          </p>
        </button>
      ))}
    </div>
  );
}

