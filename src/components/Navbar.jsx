import { useDispatch, useSelector } from 'react-redux'
import { navbarChange } from '../reducers/navbarReducer'
import { bgChange } from '../reducers/bgReducer'

const Navbar = () => {
  const navbarOpen = useSelector(state=> state.navbar)
  const dispatch = useDispatch()

  function showBgsGrid() {
    dispatch(bgChange({display: 'block'}))
    dispatch(navbarChange(false))
  }

  return (
    <nav className='navbar'>
      <button
        className='toggle'
        onClick={() => dispatch(navbarChange(!navbarOpen))}
      >
        settings
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        <li onClick={(()=> showBgsGrid())}>change background</li>
      </ul>
    </nav>
  )
}
export default Navbar
