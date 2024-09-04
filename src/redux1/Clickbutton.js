import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incre, decre } from './CounterSlice'
const Clickbutton = () => {
    const data =useSelector((state) => state.counter.value)

    const dispatch = useDispatch()
  return (
    <>
        <h1>{data}</h1>
        <button onClick={() => dispatch(incre())}>++</button>
        <button onClick={() => dispatch(decre())}>--</button>
    </>
  )
}

export default Clickbutton