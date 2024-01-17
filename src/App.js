import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import React from 'react';

function App() {
  return (
    <div className="app">
      <div className='main'>
        <Sidebar/>
        <div className='content'>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
