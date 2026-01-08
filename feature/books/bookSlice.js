import { createSlice } from "@reduxjs/toolkit";

//initial state of the book 
const initialState = {
    book:[]
}

//function for creating the slice 
const bookSlice = createSlice({
    name :"book",  // name of the state 
    initialState, // it takes the initialState
    reducers :{
            setBook :(state,action) =>{
                state.book = action.payload;
            }
    }
})

const {reducer,actions} = bookSlice;
export const {setBook} =actions;

export default reducer;