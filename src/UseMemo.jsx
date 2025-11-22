//create an app that does: 
//1. Increases a counter by 1
//2. Lets user put a value in an input box (n) and you need to show sum from 1 to n
//Constraint: everything needs to be inside the app

import { useEffect, useMemo, useState } from "react";

//this is the traditional way of doing it 
function MemoApp(){
    const [counter,setCounter]=useState(0);
    const [inputValue,setInputValue] = useState(0);

    let count = 0;
    for (let i=0;i<=inputValue;i++){
        count=count+i;
    }

    return <div>
        <input placeholder="enter the value" onChange={(e)=>{
            setInputValue(e.target.value)
        }}></input>
        <h3>Sum from 1 to {inputValue} is {count}</h3>
        <br></br>
        <button onClick={()=>{
            setCounter(counter+1);
        }}>Counter {counter}</button>

    </div>
}

function MemoAppOptimal(){
    const [counter,setCounter]=useState(0);
    const [inputValue,setInputValue] = useState(0);

    let count = useMemo(()=>{
        let finalCount=0;
        for (let i=0;i<=inputValue;i++){
            finalCount=finalCount+i;
        }
        return finalCount;
    },[inputValue]);


    return <div>
        <input placeholder="enter the value" onChange={(e)=>{
            setInputValue(Number(e.target.value))
        }}></input>
        <h3>Sum from 1 to {inputValue} is {count}</h3>
        <br></br>
        <button onClick={()=>{
            setCounter(counter+1);
        }}>Counter {counter}</button>

    </div>
}

export {MemoAppOptimal};