import { useSelector } from 'react-redux'
import Clock from './components/Clock'
import Navbar from './components/Navbar'
import './style/index.scss'
import Backgrounds from './components/Backgrounds'
import Stopwatch from './components/Stopwatch'
import ModeMenu from './components/ModeMenu'
import CountdownTimer from './components/CountdownTimer'


function App() {
  const bg = useSelector(state => state.bg)

  return (
    <div
      id='bg-container'
      className={bg.option}
    >
      <ModeMenu />
      <div>
        <Navbar />
        <Clock />
        <Stopwatch />
        <CountdownTimer />
        <Backgrounds />
      </div>
    </div>
  )
}

export default App
