import { useDispatch } from "react-redux"
import { bgChange } from "../reducers/bgReducer"

export default function Backgrounds () {
  const dispatch = useDispatch()
  
  return (
    <div id="backgrounds" onClick={(e) => dispatch(bgChange(e.target.className))}>
      <div className="option-1"></div>
      <div className="option-2"></div>
      <div className="option-3"></div>
      <div className="option-4"></div>
      <div className="option-5"></div>
      <div className="option-6"></div>
      <div className="option-7"></div>
      <div className="option-8"></div>
    </div>
  )
}