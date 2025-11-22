// write a component that takes a todo id as an input and 
// fetches the data for that todo from the given endpoint
// and then renders ImageTrack

import axios from "axios";
import { useEffect, useState } from "react";


function AppAssignment2(){
    
    const [valueid,setValueid] = useState(null);
    
    return <div>
        <button onClick={(e)=>{
            setValueid(1)}}>1</button>
        <button onClick={(e)=>{
            setValueid(e.target.value)
        }} value={2}>2</button>
        <button onClick={(e)=>{
            setValueid(e.target.value)
        }} value={3}>3</button>
        <button onClick={(e)=>{
            setValueid(e.target.value)
        }} value={4}>4</button>
        <Todo id={valueid}></Todo>
    </div>

}

function Todo({id}){
    const [todo,setTodo] = useState(null);

    useEffect(()=>{
        axios.get(`https://dummyjson.com/todos/${id}`)
        .then(function(response){
            setTodo(response.data)
        })
    },[id]);
    if (!id) return <h3>Enter an ID to fetch a todo.</h3>;
    if (!todo) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>{todo.todo}</h2>
      <h4>{todo.completed ? "Completed" : "Not completed"}</h4>
    </div>
  );
}

export {AppAssignment2};