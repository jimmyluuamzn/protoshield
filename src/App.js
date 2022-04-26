import { useState, useEffect } from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=25");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      <h1 class="title">SHIELD</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search for a CSA..."/>
      <div className="cards-container">
      {users.map((user, index) => (
        <Profile key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;