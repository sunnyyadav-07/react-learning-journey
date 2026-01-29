import React from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
  const users = [
    { id: 1, name: "Sunny" },
    { id: 2, name: "Aman" },
    { id: 3, name: "Rohit" },
  ];
  return (
    <>
      <h2 className='text-white text-6xl text-center mt-10'>Users Page</h2>
      {users.map((user) => (
        <p key={user.id} className='text-center mt-5'>
          <Link to={`/users/${user.id}`} className='text-white text-4xl '>{user.name}</Link>
        </p>
      ))}
    </>
  );
}

export default Users
