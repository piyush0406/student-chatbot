import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData:{}
}

export const counterSlice = createSlice({
    name: 'action',
    initialState,
    reducers: { 
        setActionData:(state,action) => {
            state.userData=action?.payload
        }   
        
    }
})

export const{setActionData}= counterSlice.actions
export default counterSlice.reducer
