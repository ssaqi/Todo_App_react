import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
function List(props) {

  const [line, setLine]=useState(false)
  const cutIt = () =>{
    setLine(true)
  }
  return (
<div className='Style'>
  
  <li style={{ textDecoration: line ? "line-through" : "none"}}>
    <span onClick={cutIt}>
      <DeleteIcon 
      className='icon' 
      style={{height: "18px"}}
       />
    </span>
    {props.text}
  </li>
  </div>

  )
}

export default List