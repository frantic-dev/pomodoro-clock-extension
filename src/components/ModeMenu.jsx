import StopwatchIcon from '../assets/stopwatch.svg?react'
import ClockIcon from '../assets/clock.svg?react'
import CountdownTimer from '../assets/countdown-timer.svg?react'
import { useDispatch } from 'react-redux'
import { modeChange } from '../reducers/modeReducer'

export default function ModeMenu() {
  const dispatch = useDispatch()

  return (
    <div id='mode-menu'>
      <ClockIcon
        id='clock-icon'
        onClick={() => dispatch(modeChange('clock'))}
      />
      <StopwatchIcon
        id='stopwatch-icon'
        onClick={() => dispatch(modeChange('stopwatch'))}
      />
      <CountdownTimer
        id='countdown-timer-icon'
        onClick={() => dispatch(modeChange('countdown'))}
      />
    </div>
  )
}
