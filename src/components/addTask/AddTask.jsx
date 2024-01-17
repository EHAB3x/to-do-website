import React, { useEffect, useState } from 'react'
import './AddTask.css'
import { useDispatch } from 'react-redux';
import { addTask } from '../../state/Slices/addTaskSlice';
const AddTask = () => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [category,setCategory] = useState("");
    const [date,setDate] = useState("");
    const [inps,setInputs] = useState('');
    let count = 0;
    const dispatch = useDispatch();
    const submit = (e)=>{
        e.preventDefault();

        
        inps.forEach((inp)=>{
                if(inp.value ===""){
                    inp.classList.add("border-2","border-rose-500");
                    count++;
                }
            })
            if(count === 0){
                dispatch(addTask({title,desc,category,date}))
                setTitle('')
                setDesc('')
                setCategory('')
                setDate('')
                const addTaskForm = document.querySelector('.taskDetails');
                addTaskForm.classList.remove('show')
            }
    }
    
    useEffect(()=>{
        const inps = document.querySelectorAll(".taskDetails .data");
        setInputs(inps);
        const close = document.querySelector('.taskDetails .close');
        const addTaskForm = document.querySelector('.taskDetails');
        close.addEventListener('click', ()=>{
            addTaskForm.classList.remove('show')
        })
    },[])
  return (
    <form className='taskDetails'>
        <span className='close'></span>
        <label htmlFor="title" className='mt-[20px]'>Title</label>
        <input className='data' type="text" id='title' value={title} onChange={(e)=> setTitle(e.target.value)} required/>

        <label htmlFor="desc">Description</label>
        <input className='data' type="text" id='desc' value={desc} onChange={(e)=> setDesc(e.target.value)} required/>

        <label htmlFor="category">Category</label>
        <input className='data' type="text" id='category' value={category} onChange={(e)=> setCategory(e.target.value)} required/>

        <label htmlFor="date">End Date </label>
        <input className='data' type="date" id='date'  value={date} onChange={(e)=> setDate(e.target.value)} required/>

        <input type="submit" id='date' onClick={e=> submit(e)}/>
    </form>
  )
}

export default AddTask