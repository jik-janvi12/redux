import React from 'react'
import { createSlice} from '@reduxjs/toolkit'
export const CountSlice = createSlice({
    name : 'counter',
    initialState :{
        item:[],
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
        },
        value:[],
        editId:null,
    },
    reducers: {
        submit :(state, action) =>{
            
            if(state.editId == null)
            {   
                // state.item = state.item
                console.log("=====>handlesubmit",action.payload);
                state.value.push(action.payload)
                state.item=state.value
            }
            else{
                    state.value[state.editId]=action.payload
                    console.log("+++++++++update",action.payload);
                    state.item.splice(state.editId,1)
                    state.item = state.value

                    state.initialValues = {
                        firstName :'',
                        lastName :'',
                        email:'',
                    }
                    state.item.splice(state.editId,1,action.payload)
                    state.editId = null;
            }
        },
        editview :(state,action) =>{
            console.log("=====update",action.payload);
            state.editId =action.payload
            state.initialValues =state.item[action.payload]
            
        },
        deleteview :(state,action) =>{
            console.log("====delete",action.payload);
            state.value.splice(action.payload,1)
            state.item=state.value

        }
    }
})
export const {submit,deleteview,editview} = CountSlice.actions
export default CountSlice.reducer