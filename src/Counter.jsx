import React, { useState } from 'react'
import './counter.css'
export default function Counter() {
    const [count, setCount] = useState(0)
    function handelClicked(e) {
        const name = e.target.name;
        name === 'plus' ? setCount((prev)=>(prev + 1)) : setCount((prev)=>(prev=== 0 ? prev : prev - 1)) 
            
    }
    return (
        <>
        <div className="container">
           <div className='counter'>
           <div className="title">
             <h2>{count}</h2>
           </div>
            <button onClick={handelClicked} name="minus">-</button>
            <button onClick={handelClicked} name="plus">+</button>
           </div>
            
        </div>
        </>
    )
}

