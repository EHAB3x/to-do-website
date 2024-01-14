import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import React from 'react';

function App() {
  return (
    <React.Fragment className="app">
      <div className='main'>
        <Sidebar/>
        <div className='content'>
          <Navbar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
