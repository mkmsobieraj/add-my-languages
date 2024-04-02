import React from 'react';
import './App.css';
import { CountriesSection } from './components/countries/countries-section/countries-section';

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
          <CountriesSection></CountriesSection>
        </div>
        <div className='PageFooter'></div>
      </div>
    </div>
  );
}

export default App;
