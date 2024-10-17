import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, reset } from './redux/actions';


const App = () => {

  const count = useSelector((state)=> state.count.value)
  const dispatch = useDispatch();
  return (
    <div className='main-app'>
           <h2>{count}</h2>
       <div className="container">
          <div className="increament-box">
            <button onClick={()=>dispatch(increament())}>Increase</button>
          </div>
          <div className="decreament-box">
            <button onClick={()=>dispatch(decreament())}>Decrease</button>
          </div>

          <div className="reset-box">
            <button onClick={()=>dispatch(reset())}>Reset</button>
          </div>
       </div>
    </div>
  )
}

export default App
