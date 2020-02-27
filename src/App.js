import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./components/Forms";
import PostingForms from "../src/components/PostingForms";


function App() {

const [ member, setMember ] = useState([])

const addNewMember = (m) => {
  let newM = {
    id: Date.now(),
    fname: m.fname,
    lname: m.lname,
    email: m.email,
    role: m.role,
    age: m.age,
  };
  setMember([...member, newM])};

  return (
    <div className="App">
      <h1> Marvins Form </h1>
      <Forms addNewMember={addNewMember}/>
      <PostingForms member={member}/>
    </div>
  );
}

export default App;
