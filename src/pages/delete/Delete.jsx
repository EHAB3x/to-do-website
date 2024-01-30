import React from 'react'
import './Delete.css'
import { useDispatch, useSelector } from 'react-redux'
import { editDelete} from '../../state/Slices/addTaskSlice';
import { useState } from 'react';
const Delete = () => {
    const[finishClass,setFinishClass] = useState([]);

    const favTasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();



    const finishedTask =(fTask)=>{
        setFinishClass([...finishClass,fTask.id]);
        console.log(fTask.id);
        setTimeout(() => {
            dispatch(editDelete(fTask));
        }, 700);
}
  return (
    <div  className='tasks sm:px-[20px] px-[20px] grid sm:grid-cols-3 sm:gap-16 gap-8'>
        {favTasks.map(task =>(
            task.delete === true && (
                <div className={`task ${task.delete === true ? 'delete' : 'hidden'}  ${finishClass.includes(task.id) ?'finish' :''}`} key={task.id}>
                <div className="top">
                    <div className='left'>
                        <h2>{task.title}</h2>
                        <p>{task.category}</p>
                    </div>

                    <div className='right'>
                        <button onClick={()=> finishedTask(task)}>Restore</button>
                    </div>
                </div>

                <div className="mid mt-[8%]">
                        <p>{task.desc}</p>
                </div>
            </div>
            )
        ))}
    </div>
  )
}

export default Delete