import React from "react";
import Detail from "./Modal";
import { useState, useEffect } from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const staticUsers = [
  {
    name: {
      first: "Michael",
      last: "Wang"
    },
    picture: {
      medium: "hacker2.jpg",
      large: "hacker2.jpg"
    },
    dob: {
      age: 10
    },
    location: {
      street:{
        number: 10,
        name: "Main St"
      },
      city: "Ravendale1",
      state: "Ontario",
      postcode: "K5T 1W2",
      country: "Canada"
    },
    registered: {
      age: 30
    }
  },
  {
    name: {
      first: "Jimmy",
      last: "Lu"
    },
    picture: {
      medium: "hacker1.jpg",
      large: "hacker1.jpg"
    },
    dob: {
      age: 23
    },
    location: {
      street:{
        number: 10,
        name: "Main St"
      },
      city: "Ravendale2",
      state: "Ontario",
      postcode: "K5T 1W2",
      country: "Canada"
    },
    registered: {
      age: 30
    }
  }  
  ]

  const staticUsersColumn = [
    {
      name: {
        first: "Zipei",
        last: "Wei"
      },
      picture: {
        medium: "hacker4.jpg",
        large: "hacker4.jpg"
      },
      dob: {
        age: 45
      },
      location: {
        street:{
          number: 10,
          name: "Main St"
        },
        city: "Ravendale3",
        state: "Ontario",
        postcode: "K5T 1W2",
        country: "Canada"
      },
      registered: {
        age: 30
      }
    },
    {
      name: {
        first: "Niken",
        last: "Lee"
      },
      picture: {
        medium: "hacker3.jpg",
        large: "hacker3.jpg"
      },
      dob: {
        age: 79
      },
      location: {
        street:{
          number: 10,
          name: "Main St"
        },
        city: "Ravendale3",
        state: "Ontario",
        postcode: "K5T 1W2",
        country: "Canada"
      },
      registered: {
        age: 30
      }
    }
  ]

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=25");
        userData = await response.json();
        console.log(userData)
      } catch (error) {
        console.log(error);
        userData = [];
      }
      console.log(users)
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
      <div className="cards-container-static">
        <div className="cards-container-static-row">
          {staticUsers.map((user, index) => (
        <Profile key={index} userData={user} />
        ))}
          </div>
        <div className="cards-container-static-column">
        {staticUsersColumn.map((user, index) => (
        <Profile key={index} userData={user} />
        ))}
        </div>
      </div>
      <div className="cards-container">
      {users.map((user, index) => (
        <Profile key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;