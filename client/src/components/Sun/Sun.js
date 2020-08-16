import React,{useState} from "react"
import style from './Sun.module.css'


function Sun({setPreventOrders}){
    const [darkMode,setDarkMode] = useState(true)


    function setMode(){
        setDarkMode(prevMode=>!prevMode)
        setPreventOrders(prevOrder=>!prevOrder)

        document.querySelector('body').style.backgroundColor = darkMode? "black": "white"
     
    }
    return(
        <div onClick={setMode} className={style.Sun}>

        </div>
    )
}

export default Sun