import React from 'react'
import {Todoitems} from '../My Components/todoitems'

export const Todos = (props) => {
  return (
    <div>
        {props.todo.length===0? "No Todos to display" : 
        props.todo.map((todo)=>{
            return <Todoitems todo={todo} onDelete={props.onDelete} key={props.SrNo}/>
        })
        }
    </div>
  )
}
