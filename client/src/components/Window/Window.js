import React from 'react'
import style from './Window.module.css'
import cookie from '../../assets/cookie.png'


const Windows=({night})=>{

return(<div>
        
        <div className={style.window}></div>
        <div className={night? style.window_cookie: style.window_cookie_night}>
        <img src={cookie} className={style.cookie} alt="cookie"/>
        </div>
        
    
    </div>
)
}

export default Windows
