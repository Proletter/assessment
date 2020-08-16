import React from 'react'
import style from './Wall.module.css'
import Sign from '../Sign/Sign'
import Mailbox from '../Mailbox/Mailbox'
import Door from '../Door/Door'
import Window from '../Window/Window'




function Wall({prevOrders}){


    return(
        <div className={style.Wall}>
          <div className={style.sign}>
          <Sign/>
          </div>

           <div className={style.windows}>
           <Window night={prevOrders}/>
            <Window night={prevOrders}/>
           </div>
          
            <div className={style.doors}>
            <Door ordered={prevOrders}/>
            </div>        
      <Mailbox/>
      
      
      
        </div>
    )
}

export default Wall