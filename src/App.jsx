import { useDispatch, useSelector } from 'react-redux'
import Clock from './components/Clock'
import Navbar from './components/Navbar'
import './style/index.scss'
import { navbarChange } from './reducers/navbarReducer'
import Backgrounds from './components/Backgrounds'

function App() {
  const dispatch = useDispatch()
  const bg = useSelector(state => state.bg)

  function hideNavbar(e) {
    const navbar = document.querySelector('.navbar')
    console.log(e.target)
    if (!navbar.contains(e.target)) {
      dispatch(navbarChange(false))
    }
  }
  return (
    <div id='bg-container' className={bg.option}>
      <div onClick={e => hideNavbar(e)} id='inner-container' >
        <Navbar />
        <Clock />
        <Backgrounds />
      </div>
    </div>
  )
}

export default App
