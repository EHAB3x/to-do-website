import React from 'react'
import "./Navbar.css"
import { IoIosSearch } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
const Navbar = () => {
    const submit=(e)=>{
        e.preventDefault();
    }
  return (
    <nav className='navbar'>
        <form className="search" onSubmit={(e)=>submit(e)}>
            <input type="text" name="search" id="search" placeholder="Search Task"/>
            <IoIosSearch />
        </form>
        <button><CiCirclePlus /> Add Task</button>
    </nav>
  )
}

export default Navbar