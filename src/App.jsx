import { useSelector } from 'react-redux'
import Clock from './components/Clock'
import Navbar from './components/Navbar'
import './style/index.scss'
import Backgrounds from './components/Backgrounds'

function App() {
  const bg = useSelector(state => state.bg)

  return (
    <div id='bg-container' className={bg.option}>
      <div>
        <Navbar />
        <Clock />
        <Backgrounds />
      </div>
    </div>
  )
}

export default App
