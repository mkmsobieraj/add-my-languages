import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Page'>
        <div className='PageHeader'>
          <div className='ButtonSection'>
            <button className='Button Green'>Upload</button>
            <button className='Button Red'>Download</button>
          </div>
        </div>
        <div className='PageBody'>
          <div className='Portrait'></div>
          <div className='Countries'></div>
        </div>
        <div className='PageFooter'></div>
      </div>
    </div>
  );
}

export default App;
