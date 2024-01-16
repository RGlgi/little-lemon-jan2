import UserData from './UserData'
import SignUp from './SignUp'
import React, { useState } from 'react'

export default function SignUpUserList() {
  const [user, setUser] = useState(UserData)
  const addUser = (newUser) => {
    setUser([...user, newUser])
  }
  return (
    <div>
      <SignUp addUser={addUser} />
      <ul>
        {user.map((user, index) => (
          <li key={index}>
            Name: {user.userName}
            <br />
            User Last Name: {user.userLastName}
            <br />
            User Email: {user.userEmail}
            <br />
            User Phone: {user.userPhone}
            <br />
            User Password: {user.userPassword}
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}
