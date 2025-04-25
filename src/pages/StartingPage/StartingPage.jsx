import ActivityButton from '../../components/ActivityButton/ActivityButton';
import './StartingPage.scss';

export function StartingPage() {
  return (
      <div className='introduction'>
        <div className='icon'></div>

        <h1>Who wo wants to be <br />
          a millionare? </h1>

        <ActivityButton />
      </div>
  )
}