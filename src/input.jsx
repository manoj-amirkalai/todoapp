import React, { useState } from 'react'
import './input.css'

function InpuText (props){
    const [inputext,setInputext]=useState("")
    const handlechange=(e)=>{
        setInputext(e.target.value)
    }
    const handlesubmit=()=>{
      if(inputext!==''){
        props.additems(inputext)
        setInputext("")}else{
          alert("Please Enter ToDo to add")
        }
    }
    
  return (
    <div className='input'>
      <input type="text" onChange={handlechange} placeholder='Please Enter ToDo to add' value={inputext} />
      <button onClick={handlesubmit}>Add</button>
    </div>
  )
}

export default InpuText
