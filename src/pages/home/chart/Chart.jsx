import React from 'react';
import './Chart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Your Progress During The Week',
      },
    },
  };

  
  const Chart = () => {
    const results = [];
    const length = [];
    const days = [];
    const tasks = useSelector(state => state.tasks);
    
    
    const dates = [...Array(7)].map((_, i) => {
      const d = new Date()
      d.setDate(d.getDate() - i)
      days.push(d.toDateString().slice(0,3));
      results.push({[d.toISOString().slice(0, 10)]:0});
      length.push({[d.toISOString().slice(0, 10)]:0});
      return d.toISOString().slice(0, 10);
    });
  tasks.forEach((task,index) =>{
    dates.forEach((dat,ind)=>{
      if(task.date === dat && task.status === false){
        results[ind][dat] += 1;
      }
      if(task.date === dat){
        length[ind][dat] += 1;
      }
    })
  })
  
  const labels = days.map(day =>{
    return [day];
  });
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Done',
        data:  results.map((result,index)=>{
          return [((length[index][dates[index]] - result[dates[index]]) / length[index][dates[index]]) * 100]
        }),
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
      {
        label: 'In Progress',
        data:  results.map((result,index)=>{
          return [(result[dates[index]] / length[index][dates[index]]) * 100]
        }),
        backgroundColor: 'rgba(84, 88, 180, 1)',
      },
    ],
  };
  
  return (
    <div className='chart px-[20px]'>
        <Bar options={options} data={data} />
    </div>
  )
}

export default Chart