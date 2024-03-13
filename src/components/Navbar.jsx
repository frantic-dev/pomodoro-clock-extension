import { useDispatch, useSelector } from 'react-redux'
import { navbarChange } from '../reducers/navbarReducer'

const Navbar = () => {
  const navbarOpen = useSelector(state=> state.navbar)
  const dispatch = useDispatch()
  return (
    <nav className='navbar'>
      <button
        className='toggle'
        onClick={() => dispatch(navbarChange(!navbarOpen))}
      >
        settings
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        <li>change background</li>
      </ul>
    </nav>
  )
}
export default Navbar
