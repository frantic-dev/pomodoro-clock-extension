import { useDispatch, useSelector } from 'react-redux'
import Clock from './components/Clock'
import Navbar from './components/Settings'
import './style/index.scss'
import { navbarChange } from './reducers/navbarReducer'

function App() {
  const navbarOpen = useSelector(state => state.navbar)
  const dispatch = useDispatch()
  return (
    <div
      onClick={e => {
        const navbar = document.querySelector('.navbar')
        if (!navbar.contains(e.target)) {
          dispatch(navbarChange(false))
          console.log(navbarOpen)
        }
      }}
    >
      <Navbar />
      <Clock />
    </div>
  )
}

export default App
