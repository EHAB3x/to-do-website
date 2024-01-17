import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import React from 'react';
import Quotes from './pages/home/quotes/Quotes';

function App() {
  return (
    <div className="app">
      <div className='main'>
        <Sidebar/>
        <div className='content'>
          <Navbar />
          <Routes>
            <Route path='/' element={
            <div className='sm:px-[20px] px-[40px] grid sm:grid-cols-3 gap-4'>
              <Quotes/>
            </div>
            }/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
