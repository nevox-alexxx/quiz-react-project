import React, {useState} from "react";

import geography from "../questions/geography.json";
import history from "../questions/history.json"
import math from "../questions/math.json"

import { QuestionArea } from "../QuestionArea/QuestionArea";
import { VariantButton } from "../VariantButton/VariantButton";
import { RewardList } from "../RewardList/RrewardList";
import { FinalPage } from "../FinalScreen/FinalPage";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { TimerClock } from "../TimerClock/TimerClock"

import "./MainPage.scss";

const questionTasks = {
  geographyKey: geography,
  historyKey: history,
  mathKey: math,
}

const MainPage = () => {
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentReward, setCurrentReward] = useState(null);
  const [showFinalPage, setShowFinalPage] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');

  const currentTask = questionTasks[selectedTask];
  const task = currentTask ? currentTask[step] : null;

  const onClickVariant = (index) => {
    console.log(index);

    if (index === task.correct) {
      setTimeout(() => {
        setShowAnswer(true);

        setTimeout(() => {
          setStep(step + 1);
          setShowAnswer(false);
        }, 2000)
      }, 2000);

      setCurrentReward(task.price)

    } else {
      setTimeout(() => {
        setShowAnswer(true);
      }, 2000);

      setTimeout(() => {
        setShowFinalPage(true);
      }, 2500);
    }
  }

  const getButtonClass = (index) => {
    if (showAnswer) {
      if (index === task.correct) {
        return "variant-btn correct disabled";
      } else if (task.incorrectly.includes(index)) {
        return "variant-btn incorrectly disabled";
      }
    }
    return "variant-btn";
  }

  return (
    <>
      <ModalWindow setSelectedTask={setSelectedTask} />

      {step < (currentTask ? currentTask.length : 0) && !showFinalPage ? (
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
      ) : (
        <FinalPage currentReward={currentReward} />
      )}
    </>
  )
}

export { MainPage };
