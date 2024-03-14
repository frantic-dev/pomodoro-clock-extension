import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function CountdownTimer() {
  const countdownData = useSelector(state => state.countdown)
  const mode = useSelector(state => state.mode)
  // get total time in seconds
  const totalTime =
    countdownData.hours * 3600 +
    countdownData.minutes * 60 +
    countdownData.seconds

  const [counter, setCounter] = useState(totalTime)
  const [isRunning, setIsRunning] = useState(false)
  const [dings, setDings] = useState(3)
  const dingAudio = new Audio(('ding.mp3'))

  useEffect(() => {
    let intervalId

    counter > 0 &&
      isRunning &&
      setTimeout(() => {
        setCounter(counter - 1)
      }, 1000)

    if (counter === 0 && dings > 0) {
      intervalId = setInterval(() => {
        playSound()
      }, 1000)
    }

    return() => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, isRunning, dings])
  
  function playSound() {
    dingAudio.play()
    setDings(dings - 1)
  }

  function getHours(totalSeconds) {
    return Math.floor((totalSeconds / 3600) % 60)
      .toString()
      .padStart(2, '0')
  }

  function getMinutes(totalSeconds) {
    return Math.floor((totalSeconds / 60) % 60)
      .toString()
      .padStart(2, '0')
  }

  function getSeconds(totalSeconds) {
    return Math.floor(totalSeconds % 60)
      .toString()
      .padStart(2, '0')
  }

  const startAndStop = () => {
    setIsRunning(!isRunning)
  }

  const reset = () => {
    setCounter(totalTime)
    setIsRunning(false)
    setDings(3)
  }

  return (
    <div className={mode === 'countdown' ? 'block' : 'none'}>
      <div className='countdown-timer'>
        {`${getHours(counter)}:${getMinutes(counter)}:${getSeconds(counter)}`}
      </div>
      <div className='countdown-buttons'>
        <button
          className='countdown-button'
          onClick={startAndStop}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          className='countdown-button'
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
