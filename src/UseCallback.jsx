import { memo,useCallback, useState } from "react";

function CallbackApp(){
    const [counter,setCounter]=useState(0);

    const a = useCallback(function(){
        console.log("hi there!");
    },[])

    return <div>
        <button onClick={()=>{
            setCounter(counter+1);
        }}>Counter {counter}</button>
        <Demo a={a}/>
    </div>
}

const Demo = memo(function({a}){
    console.log("re-rendered");
    return <div>
        hi there {a}
    </div>
})

export {CallbackApp};