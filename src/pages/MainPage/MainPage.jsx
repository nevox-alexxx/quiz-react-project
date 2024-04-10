import React, { useState } from "react";

import { GamePage } from "../GamePage/GamePage";
import { FinalPage } from "../FinalPage/FinalPage";
import { ModalArea } from "../../components/ModalArea/ModalArea";

import geography from "../../data/geography.json";
import history from "../../data/history.json"
import math from "../../data/math.json"

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

  const isGameOver = step > (currentTask ? currentTask.length : 0) || showFinalPage;

  const onClickVariant = (index) => {
    setTimeout(() => {
      setShowAnswer(true);
    }, 2000);

    if (index === task.correct) {
      setTimeout(() => {
        setStep(step + 1);
        setShowAnswer(false);
      }, 4000)

      setCurrentReward(task.price)
    } else {

      setTimeout(() => {
        setShowFinalPage(true);
      }, 4000);
    }
  }

  if (isGameOver) {
    return <FinalPage currentReward={currentReward} />
  }

  return (
    <>
      <ModalArea setSelectedTask={setSelectedTask} />
      {selectedTask.length > 0 && (

          <GamePage 
            currentReward={currentReward} 
            onClickVariant={onClickVariant}
            setSelectedTask={setSelectedTask}
            showAnswer={showAnswer}
            task={task}
            step={step}
          />
        )
      }
    </>
  )
}

export { MainPage };
