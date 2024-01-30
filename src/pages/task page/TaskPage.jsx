import React, { useEffect, useState } from 'react'
import './TaskPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editTask } from '../../state/Slices/addTaskSlice'
const TaskPage = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const [date,setDate]= useState('');
    const [notes,setNotes] = useState('');
    const [editBool, setEditBool] = useState(true);
    const {taskId} = useParams();
    const task = useSelector(state => state.tasks[taskId]);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        setTitle(task.title);
        setDescription(task.desc);
        setCategory(task.category);
        setDate(task.date);
        setNotes(task.notes)
    },[task]);
    const allowEdit = ()=>{
        const inputs = document.querySelectorAll('.taskPage form input');
        const textarea = document.querySelector('.taskPage form textarea');

        inputs.forEach(input => {
            input.disabled = !editBool;
        });
        textarea.disabled = !editBool;
        setEditBool(!editBool);   
    }
  return (
    <div className='taskPage px-[20px]'>
        <form className='flex flex-col'>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={title} onChange={(e)=> setTitle(e.target.value)} disabled/>

            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} disabled/>

            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" value={category} onChange={(e)=> setCategory(e.target.value)} disabled/>

            <label htmlFor="date">End Date</label>
            <input type="date" name="date" id="date" value={date} onChange={(e)=> setDate(e.target.value)} disabled/>

            <label htmlFor="notes">Notes</label>
            <textarea type="text" name="notes" id="notes" value={notes} onChange={(e)=> setNotes(e.target.value)} disabled/>

            <span onClick={()=> {
                allowEdit()
                editBool === false && dispatch(editTask({id:taskId,title,description,category,date,notes}));
                }}>{editBool === true ? 'Edit' : 'Save'}</span>
        </form>
    </div>
  )
}

export default TaskPage