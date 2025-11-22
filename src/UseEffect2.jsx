// write a component that takes a todo id as an input and 
// fetches the data for that todo from the given endpoint
// and then renders ImageTrack

import axios from "axios";
import { useEffect, useState } from "react";


function AppAssignment(){
    const [valueid,setValueid] = useState(null);
    return <div>
        <input onChange={(e)=>setValueid(e.target.value)}
       placeholder="enter id number" value={valueid}></input>
        <Todo id={valueid}/>
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

export {AppAssignment};