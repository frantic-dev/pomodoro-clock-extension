import { useDispatch, useSelector } from 'react-redux'
import { bgChange } from '../reducers/bgReducer'

const Backgrounds = () => {
  const bg = useSelector(state => state.bg)
  const dispatch = useDispatch()
  console.log(bg.display)

  return (
    <div className={`${bg.display}`}>
      <div
        id='backgrounds' 
        onClick={e => dispatch(bgChange({ option: e.target.className }))}
      >
        <div className='option-1'></div>
        <div className='option-2'></div>
        <div className='option-3'></div>
        <div className='option-4'></div>
        <div className='option-5'></div>
        <div className='option-6'></div>
        <div className='option-7'></div>
        <div className='option-8'></div>
      </div>

      <button id='hide-bgs-grid' onClick={()=> dispatch(bgChange({display:'none'}))}>Done</button>
    </div>
  )
}

export default Backgrounds
