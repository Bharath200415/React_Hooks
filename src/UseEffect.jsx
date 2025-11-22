import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./context";

function App3(){
    const [todos,setTodos] = useState([]);

    //will be polling and fetching after each 5 seconds  
    // useEffect(()=>{
    //     setInterval(()=>{
    //         fetch("https:/sum-server.100xdevs.com/todos")
    //         .then(async function(res){
    //             const json = await res.json();
    //             setTodos(json.todos);
    //         })
    //     },5000)
    // },[])


    async function fetchtodos(){
        try{
            const response = await fetch("https://dummyjson.com/todos");
            const result = await response.json();

            if (result && result.todos) setTodos(result.todos);

        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        console.log("Run only once");
    },[]); //empty dependency array runs this only once

    return <div>
        <button onClick={fetchtodos}>Fetch all the todos</button>
        {todos.map(todo=><Todo key={todo.id} title={todo.todo} completed = {todo.completed}/>)}
    </div>
}
function Todo({title,completed}){
    const {theme} = useContext(GlobalContext);
    // let message;
    // if (completed){
    //     message = <h4 style={{color:"green"}} >The task has been completed</h4>;
    // }else{
    //     message = <h4 style={{color:"red"}}>
    //         Task not completed yet
    //     </h4>;
    // }
    
    return (
        <div style={theme==='dark'?{backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}}>
            <h2>
                {title}
            </h2>
            {/* {message} */}
            {
                completed?(<h4 style={{color:"green"}} >The task has been completed</h4>):(<h4 style={{color:"red"}}>Task not completed yet</h4>)
            }

        </div>
    )
}

export {App3};