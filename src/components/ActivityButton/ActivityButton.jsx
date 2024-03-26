import './ActivityButton.scss';
import { Link } from "react-router-dom";

export default function ActivityButton() {
  return (
    <>
      <Link 
        to="/quest"
        className="button"
      >
        Start
      </Link>
    </>
  )
}