import "./FinalPage.scss";
import { Link } from "react-router-dom";
import "../../components/ActivityButton/ActivityButton"

export function FinalPage({ currentReward }) {

  return (
    <div className='final-page-main'>
      <div className='icon-like'></div>
      <p className='total-text'>Total score:</p>
      <h1 className='current-reward'>$ {!!currentReward ? currentReward : 0} earned</h1>

      <Link
        to="/"
        className="back-btn"
      >
        Back
      </Link>
    </div>
  )
}