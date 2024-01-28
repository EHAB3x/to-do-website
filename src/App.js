import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import React from 'react';
import Quotes from './pages/home/quotes/Quotes';
import Percentage from './pages/home/percentage/Percentage';
import Reminder from './pages/home/reminder/Reminder';
import Chart from './pages/home/chart/Chart';
import Task from './pages/tasks/Task';
import Fav from './pages/fav/Fav';

function App() {
  return (
    <div className="app">
      <div className='main sm:gap-8'>
        <div className='sm:w-[200px] w-[0px]'>
          <Sidebar/>
        </div>
        <div className='content sm:mt-[0px] mt-[100px]'>
          <Navbar />
          <Routes>
            <Route path='/' element={
              <>
                <div className='sm:px-[20px] px-[20px] grid sm:grid-cols-3 sm:gap-16 gap-8'>
                  <Quotes/>
                  <Percentage/>
                  <Reminder />
                </div>
                <Chart />
              </>
            }/>

            <Route path='/tasks' element={<Task/>}/>

            <Route path='/fav' element={<Fav/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
