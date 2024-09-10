import React from 'react'
import { users } from './App'
function login() {
  return (
    <>
    <label htmlFor="username">Username : </label>
    <input type="text" id="username" placeholder="Enter your username" />
    <br />
    <label htmlFor="password">Password : </label>
    <input type="password" id="password" placeholder="Enter your password" />
    <br />
    <button>Login</button>

    <ul>
        {users.map((user,index)=>(
            <li key={index}>{user.username} {user.password}</li>
        ))}
    </ul>
    </>
  )
}

export default login