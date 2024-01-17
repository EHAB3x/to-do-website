import React, { useEffect, useState } from 'react'
import './Percentage.css'
import { useSelector } from 'react-redux'
const Percentage = () => {
    const tasks = useSelector(state=> state.tasks);
    const [percentage, setPercentage] = useState(0);
    var percent = 0;

    tasks.forEach(quote => {
        if(quote.status === "in progress"){
            percent++;
        }
    });

    useEffect(()=>{
        if(tasks.length === 0){
            setPercentage(0);
        }else{
            setPercentage((percent / +tasks.length)*100);
        }
    },[percent, tasks.length]);

    console.log(percentage);
  return (
    <div className='percentage'>
        <h2>Your Progress</h2>
        <p>Here you can see how far you go</p>
        <div className={`progress bg-gradient-to-r from-indigo-500  to-emerald-500`}>
            <h3>{percentage}%</h3>
        </div>
    </div>
  )
}

export default Percentage