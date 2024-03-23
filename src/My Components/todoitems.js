import React from 'react'

export const Todoitems = ({todo, onDelete}) => {
  return (
    
    <div className='text-center'>
                 <div className='todo'>
                  <div className='todos'>  
                      <h5>{todo.title}</h5>   
                      <p>{todo.desc}</p>  
                      <button className='btn btn-sm btn-warning' onClick={()=>onDelete(todo)}>Completed</button> 
                    </div>
                </div>
    </div>
  )
}
