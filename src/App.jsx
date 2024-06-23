import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.counter) // useSelector cagirilan slice'in state'lerini doner
  console.log(value);

  return (
    <>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
        <button onClick={() => dispatch(increment())}>Arttir</button>
      </div>
    </>
  )
}

export default App
