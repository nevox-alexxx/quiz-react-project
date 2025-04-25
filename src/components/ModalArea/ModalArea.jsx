import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './ModalArea.scss'

export function ModalArea({ setSelectedTask }) {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  }

  const handleSelectTask = (task) => {
    setSelectedTask(task);
    toggleModal();
  };

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <p>
              <b>Select a topic!</b> 
              <br /> 
              <br />
              You have only one minute to answer all the questions!
            </p>

            <Link
              to="/quest"
              className="choise-page"
              onClick={() => handleSelectTask('geographyKey')}
            >
              Geography
            </Link>

            <Link
              to="/quest"
              className="choise-page"
              onClick={() => handleSelectTask('historyKey')}
            >
              History
            </Link>

            <Link
              to="/quest"
              className="choise-page"
              onClick={() => handleSelectTask('mathKey')}
            >
              Math
            </Link>
          </div>
        </div>
      )}
    </>
  )
}