// import React Components
import {useState, useEffect } from 'react'


// Import Custom Components
import UserProfile from './UserProfile'



const Users = () => {

    const users = ['khalid', 'ali', 'momand', 'nasir']
  return (
    <>
        {users.map((user, id) => <UserProfile key={id} />)}
    </>
  )
}

export default Users