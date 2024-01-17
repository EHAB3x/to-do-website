import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { IoIosSearch } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import AddTask from '../addTask/AddTask';
const Navbar = () => {
    const [titleValue, setTitleValue]=useState('');
    const [descValue, setDescValue]=useState('');
    const [categoryValue, setCategoryValue]=useState('');
    const [dateValue, setDateValue]=useState('');

    const submit=(e)=>{
        e.preventDefault();
    }

    useEffect(()=>{
      const addBtn = document.querySelector('.navbar .addBtn');
      const addTaskForm = document.querySelector('.taskDetails');
      addBtn.addEventListener('click', ()=>{
          addTaskForm.classList.add('show')
      })
  },[])
    
  return (
    <nav className='navbar'>
        <form className="search" onSubmit={(e)=>submit(e)}>
            <input type="text" name="search" id="search" placeholder="Search Task"/>
            <IoIosSearch />
        </form>
        <button className='addBtn'><CiCirclePlus /> Add Task</button>
        <AddTask/>
    </nav>
  )
}

export default Navbar