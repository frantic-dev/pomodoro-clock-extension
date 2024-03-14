import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const mode = useSelector(state => state.mode)

  useEffect(() => {
    let intervalId
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10)
    }
    return () => clearInterval(intervalId)
  }, [isRunning, time])

  const hours = Math.floor(time / 360000)
  const minutes = Math.floor((time % 360000) / 6000)
  const seconds = Math.floor((time % 6000) / 100)

  const startAndStop = () => {
    setIsRunning(!isRunning)
  }
  const reset = () => {
    setTime(0)
    setIsRunning(false)
  }
  return (
    <div className={mode === 'stopwatch' ? 'block' : 'none'}>
      <div className='stopwatch-container'>
        <p className='stopwatch-timer'>
          {hours.toString().padStart(2, '0')}:
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </p>
        <div className='stopwatch-buttons'>
          <button
            className='stopwatch-button'
            onClick={startAndStop}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            className='stopwatch-button'
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
