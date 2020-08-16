import React,{useState} from 'react'
import style from './Mailbox.module.css'
function Mailbox(){

    const [animate, setAnimate] = useState(false)

    function dropMailboxHandler(){
        setAnimate(true)
    }

    return(
        <div onClick={dropMailboxHandler}className={animate && `Mailbox_drop`}>
        <div className={style.Mailbox}>
            <div>

            </div>
            <p>
                Mailbox
            </p>

        </div>
        </div>

    )
}

export default Mailbox