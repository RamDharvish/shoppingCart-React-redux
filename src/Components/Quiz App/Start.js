import React, { useRef } from 'react'
import './main.css'
function Start({setUserName}) {

    const inputRef=useRef()

    const handleClick=()=> {
        inputRef.current.value &&  setUserName(inputRef.current.value)
    }
  return (
    <div className='start'>

    <input type="text" placeholder='enter your name' className='startInput' ref={inputRef}/>
    <button className='startButton' onClick={handleClick}>Start</button>

    </div>
  )
}

export default Start