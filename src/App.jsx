// Objective: create a simple todo app which renders 3 prerenderToNodeStream
// - create a todo component that accepts title, description as input 
// - Initialise a state array that has 3 todos
// - Iterate over the array to render all todos
// - A button in the top level app component to add a new todo


import { useState } from "react";
import { prerenderToNodeStream } from "react-dom/static";
let counter = 4;

function App() {
  const [todos,setTodos] = useState([{
    id:1,
    title:"dinner",
    description:"eat good food"
  },{
    id:2,
    title:"Class",
    description: "CS Class"
  },{
    id:3,
    title:"gaming time",
    description:"play valorant for 2 hrs max"
  }])

  function addTodo(){
    //this pushes a new element into the existing array
    setTodos([...todos,{
      id:counter++,
      title: Math.random(),
      description:Math.random()
    }])
  }

  return (
    //Header component that takes a title as prop and renders it inside a div, such that the top level app component renders 2 headers
    //<React.Fragment><React.Fragment/> this does the same job as <></>
    <> 
    {/* <HeaderwithButton></HeaderwithButton>
      <Header title="Bharath2"></Header> */}
      <button onClick={addTodo}>Add a Todo</button>
    
    {todos.map(function(todo){
      return <Todo key={todo.id} title={todo.title} description={todo.description}/>
    })}
    </>
  )

}

function HeaderwithButton(){
  const [title,setTitle]= useState("My name is Bharath");
    function update(){
    setTitle("My name is:"+ Math.random());
  }


  return <div>
    <button onClick={update}>Click me to change the site</button>
    <Header title = {title}></Header>

  </div>
}

//component
function Todo({title, description}){ 
  return <div>
    <h2>
      {title}
    </h2>
    <h4>
      {description}
    </h4>
  </div>
}


export default App
