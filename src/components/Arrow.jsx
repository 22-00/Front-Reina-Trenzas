import React, { useEffect, useState } from 'react'
import flecha from '../assets/flecha.svg'

export const Arrow = () => {

    const [scroll, setScroll] = useState(false)
    const upWards = () => {
        window.scrollTo(0,0)
    }
    
    useEffect(()=>{
        const turnUp = () => {
            if(window.scrollY > 300){
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener("scroll", turnUp)
    },[])

  return (
    <div className={scroll ? 'container-flecha' : 'flechaOff' }>
            <button onClick={upWards}><img src={flecha}/></button>
        </div>
  )
}
