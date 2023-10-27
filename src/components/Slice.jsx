import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState ={
    todos:[]
}

export const todoslice= createSlice({
  
    name:"todo",
    initialState,
    reducers:{
        addto:(state,action)=>{
            const todo = {id:nanoid(),text:action.payload}
            state.todos.push(todo)
        },

        removeto:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !==action.payload)
        },
       
    }
})

export const {addto,removeto}= todoslice.actions
export default todoslice.reducer