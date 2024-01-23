import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { IoIosSearch } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import AddTask from '../addTask/AddTask';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const tasks = useSelector(state => state.tasks);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const submit=(e)=>{
        e.preventDefault();
    }

    useEffect(()=>{
        const addBtn = document.querySelector('.navbar .addBtn');
        const addTaskForm = document.querySelector('.taskDetails');
        addBtn.addEventListener('click', ()=>{
          addTaskForm.classList.add('show');
        });

        setSearchResult(tasks.filter(task=> task.title.includes(search)));
    },[search,tasks]);
    
  return (
    <nav className='navbar'>
        <form className="search" onSubmit={(e)=>submit(e)}>
            <input type="text" name="search" id="search" placeholder="Search Task" autoComplete='off' value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <IoIosSearch />
            <div className={`${search === "" || searchResult.length === 0 ? "!hidden" : ""} searchResult`}>
                {searchResult.map((res,index)=>{
                        return(
                            <Link to={`tasks/${res.id}`} key={res.id} onClick={()=> setSearch("")}>
                                <h2>{res.title}</h2>
                                <p>{res.desc}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </form>
        <button className='addBtn'><CiCirclePlus /> Add Task</button>
        <AddTask/>
    </nav>
  )
}

export default Navbar