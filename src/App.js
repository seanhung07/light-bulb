import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [on, setOn]= useState(false)
  return (
    <div className={on? "on": ""}>
    <div className="App">
        <div className="light">
          <div className="wire"></div>
          <div className="bulb">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="switch">
          <div className="btn" onClick={()=>setOn(!on)}>

          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
