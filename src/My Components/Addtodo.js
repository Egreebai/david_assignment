import React from 'react'
import { useState } from 'react';

export const Addtodo = ({addtodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description can not be empty")
        }else{
            addtodo(title,desc)
            setTitle("")
            setDesc("")
        }
        
    }
  return (
    <>
            <div className='addtodo'>
                <div className="card cardcustom">
                    <div className="card-header" style={{color:"#fff"}}><h5>AddTodo</h5></div>    
                    <div className="card-body">
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label htmlFor="title" style={{color:"#fff"}}>Todo Title</label>
                            <input type="text" placeholder='Please Type.....' value={title} className="form-control" id="title" onChange={(e)=>setTitle(e.target.value)} />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="desc" style={{color:"#fff"}}>Todo Description</label>
                            <input type="text"placeholder='Please Type.......' value={desc} className="form-control" id="desc" onChange={(e)=>setDesc(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-md btn-success btn-block">Submit</button>
                    </form>
                    </div>
                </div>
            </div>

     </>
  )
}
