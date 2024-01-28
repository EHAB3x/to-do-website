import React from 'react';
import "./Reminder.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Reminder = () => {
    const tasks = useSelector(state => state.tasks);
    const today = new Date().toISOString().slice(0,10);
    let tasksNumber = 0;

    tasks.forEach(task => {
        if(task.date === today && task.status=== "in progress"){
            tasksNumber++;
        }
    });
  return (
    <div className='reminder'>
        <h2>Time is running out</h2>
        <p>These tasks must be done today</p>
        <div className="content">
            <Link to={'/tasks'}>{tasksNumber}</Link>
            {tasksNumber === 0 
            ? (<h3>There is no tasks that must be done today</h3>)
            : (<h3 className='text-center'>click the number to view tasks you have to finish</h3>)}
        </div>
    </div>
  )
}

export default Reminder