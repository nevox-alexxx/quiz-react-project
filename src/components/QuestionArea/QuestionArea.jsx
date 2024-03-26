import "./QuestionArea.scss";

export function QuestionArea( {task} ) {
  return (
    <>
      <div className="topic">{task.subject}</div>
      <div className="question">
        {task.question}
      </div>
    </>
  )
}