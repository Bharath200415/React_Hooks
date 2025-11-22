import { useContext } from "react"
import { GlobalContext } from "./context/index.jsx"


function UseContextApp(){

    const {theme,setTheme} = useContext(GlobalContext);
    console.log(theme);

    return (
        <div>
            <h2>Use Context</h2>
            <button onClick={()=>{
                setTheme(theme==="light"?"dark":"light")
            }} >Change theme to {theme==="dark"?"light":"dark"}</button>
        </div>
    );

}


export {UseContextApp};