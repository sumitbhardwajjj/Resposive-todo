import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { removeto } from './Slice'

const Remove = () => {
    const dispatch = useDispatch();

    const todos = useSelector(state=>state.todos)
  return (
    <div >
    <div  style={{maxwidth:"1000px"}}>
    <ul className='list-group px-5 w-100'>
     {todos.map((todo)=>(
        <li className="list-group-item text-center" key={todo}>
            {todo.text}
           
           <button className="btn btn-danger mx-3" onClick={()=>dispatch(removeto(todo.id))}>remove</button>
          
        </li>

      ))}
     </ul>
    </div>
    </div>
  )
}

export default Remove
