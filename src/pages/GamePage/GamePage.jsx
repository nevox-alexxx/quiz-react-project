import { QuestionArea } from '../../components/QuestionArea/QuestionArea';
import { VariantButton } from '../../components/VariantButton/VariantButton';
import { RewardList } from '../../components/RewardList/RewardList';
import { TimerClock } from '../../components/TimerClock/TimerClock';

import classNames from 'classnames';

export function GamePage({
    currentReward,
    setCurrentReward,
    onClickVariant, 
    showAnswer,
    task,
    step,
  }) {
    const getButtonClass = (index) => {
      return classNames('variant-btn', {
        'correct': showAnswer && index === task.correct,
        'incorrectly': showAnswer && task.incorrectly.includes(index),
        'disabled': showAnswer
      });
    }
  
    return (
    <>
      <div className="nav">
        <a href="#menu" className="menu-icon"> </a>
      </div>

      <TimerClock currentReward={currentReward} />

      <aside className="aside-rewards" id="menu">
        <div className="nav-close">
          <a href="# " className="menu-icon-close" > </a>
        </div>

        <RewardList
          step={step}
          setCurrentReward={setCurrentReward}
        />
      </aside>

      <div className="question-area">
        <QuestionArea task={task} />

        <VariantButton
          task={task}
          onClickVariant={onClickVariant}
          getButtonClass={getButtonClass}
        />
      </div>
    </>
  )
}