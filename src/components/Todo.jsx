import React from 'react'
import "./Todo.css"
import List from './List';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
const Todo = () => {
    //set Values
    const[item, setitem]=useState("");
    //set values on array.map for listing items
    const[newitem, setNewItem]=useState([]);
    //set Items Function
    const itemEvent = (event) =>{
        setitem(event.target.value)
      
   };
   //button function
   const ListOfItem = () =>{
    
       setNewItem((prevalue)=>{
        return [...prevalue, item]


       });


      setitem(" ");
      
   }



  return (
    <>
    <div className='main_div'>
        <br></br> <br /><br/>
       <div className='center_div'>
        <br/>
        <center>
        <h1 style={{color: '#ff7961'}}>TODO APP</h1>
       <br/>
   <TextField  input type="text" 
     value={item}
    placeholder="Enter Yours Items" 
    id="standard-basic"
    variant="standard"
    name={item.name}
    onChange={itemEvent}
   />
 
   <Button className='btn' onClick={ListOfItem}> 
   <AddCircleIcon />
   </Button>
   </center>
   <ul className='list'>
        {
        newitem.map((val, index)=>{
        return <List key={index}
                text={val} 
                />
        })
        }
     
       </ul>
       </div>
 
    </div>
    </>
  )
}

export default Todo