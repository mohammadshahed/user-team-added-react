import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User/User';

function App() {

  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect( () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res=>res.json())
    .then(data=>setUsers(data.results))
  }, [])

  const addMember = (name) => {
   setTeam([...team, name]);
  }

  return (
    <div>
      <h1>Team Builder</h1>
      <ul>
        {
          team.map((team, index) => <li key={index}>{team}</li>)
        }
      </ul>
      {
        users.map((user, index) => <User key={index} user={user} addMember ={addMember}></User>)
      }
    </div>
  );
};

export default App;
