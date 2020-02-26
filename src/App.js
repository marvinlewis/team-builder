import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

const [ name, setName ] = useState("");


const handleChange = (e) => setName(e.target.value); 
console.log(name);


  return (
    <div className="App">
      <form>
        <label htmlFor="members">
          Team Members:  
            <input onChange={handleChange} placeholder= " Type here"id= "members" name="members" type="text" />
            <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
}

export default App;
