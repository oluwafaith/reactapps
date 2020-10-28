import React, { useState, useEffect } from 'react';

function WindowWidth () {
    const [windowWidth, setwindowidth] = useState(window.innerWidth)

    const handleResize = () => {
        setwindowidth(window.innerWidth)
    }

        useEffect(()=>{
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize)
            }
        },[])
    return(
        <div>{windowWidth}</div>
    )
}
export default WindowWidth;