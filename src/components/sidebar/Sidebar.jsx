import React, { useEffect } from 'react'
import { HiBriefcase } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import { MdOutlineTaskAlt, MdFavorite, MdDelete } from "react-icons/md";
import { RxEnter } from "react-icons/rx";
import './Slidebar.css'
import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
    const navLinkStyle=({isActive})=>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            border: isActive ? '1px solid gray' : '',
            padding: isActive ? '10px' : '',
            borderRadius: isActive ? '10px 20px' : '',
            backgroundColor: isActive ? '#5458b4' : '',
            color: isActive ?'white' :'',
        }
    }

    useEffect(()=>{
        const sidebar = document.querySelector(".sidebar");
        const widthBtn = document.querySelector(".sidebar_footer svg");

        widthBtn.addEventListener('click',()=>{
            sidebar.classList.toggle('close')
        })
    },[])
    return(
        <aside className='sidebar'>
            <Link to={'/'} className="sidebar_header">
                <HiBriefcase />
                <h1>ToDo</h1>
            </Link>

            <div className="sidebar_body">
                <nav>
                    <NavLink style={navLinkStyle} to={'/tasks'}><FaTasks /> <span>Tasks</span></NavLink>
                    <NavLink style={navLinkStyle} to={'/fav'}><MdFavorite /> <span>Fav</span></NavLink> 
                    <NavLink style={navLinkStyle} to={'/delete'}><MdDelete /> <span>Deleted</span></NavLink> 
                    <NavLink style={navLinkStyle} to={'/done'}><MdOutlineTaskAlt /> <span>Done</span></NavLink>  
                </nav>
            </div>

            <div className="sidebar_footer">
                <RxEnter />
            </div>
        </aside>
    )
}

export default Sidebar