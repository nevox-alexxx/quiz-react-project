import ActivityButton from '../ActivityButton/ActivityButton';
import './WellcomeScreen.scss';

export function WellcomeScreen() {
  return (
    <>
      <div className='introduction'>
        <div className='icon'></div>

        <h1>Who wo wants to be <br />
          a millionare? </h1>

        <ActivityButton />
      </div>
    </>
  )
}