import React from 'react'
import { createSlice} from '@reduxjs/toolkit'
export const CounterSlice = createSlice({
    name : 'counter',
    initialState :{
        value : 0,
    },
    reducers: {
        incre : (state) =>{           
            state.value = state.value + 1
        },
        decre : (state) =>{
            state.value = state.value - 1
        },
    }
})
export const {incre,decre} = CounterSlice.actions
export default CounterSlice.reducer

