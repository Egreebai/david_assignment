
import './App.css';
import Header from './My Components/header';
import {Todos} from './My Components/todos'
import {Footer} from './My Components/footer'
import {Addtodo} from './My Components/Addtodo'
import {Weather} from './My Components/Weather'

import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  const onDelete = (todo)=>{
    console.log('i am onDelete', todo);


    setTodos(todoarr.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem('todos', JSON.stringify(todoarr))
}

const addtodo = (title,desc)=>{
  console.log("i am adding this todo", title, desc)
  let SrNo;
  if(todoarr.length==0){
    SrNo = 1;
  }else{
    SrNo = todoarr[todoarr.length-1].SrNo +1;
  }
  const myTodo ={
    SrNo:SrNo,
    title:title,
    desc:desc
  }
  setTodos([...todoarr, myTodo])
  console.log(myTodo)
  
}

  const [todoarr, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todoarr))
  },[todoarr])

  return (
    <Router>
    <div className='App-header'></div>
      <Header title="Weather Display & Todo List"/>
      <Switch>
        <Route exact path="/" render={()=>{
            return(
              <>
              <div className='container-fluid mt-5'>
                <div className='row'>
                  <div className='col-md-6'><Addtodo addtodo={addtodo}/></div>
                  <div className='col-md-6 my-bg'><Todos todo = {todoarr} onDelete={onDelete}/></div>
                </div>
              </div>
              </>
            )
          }}>
        </Route>
        <Route path="/Weather">
          <Weather />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
