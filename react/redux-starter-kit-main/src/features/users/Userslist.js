import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { selectAllUsers } from './usersSlice'

export function Userslist() {
  const users = useSelector(selectAllUsers)

  const renderedUsers = users.map((user) => {
    return (
      <li key={user.id}>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </li>
    )
  })

  return (
    <section>
      <h2>Users</h2>
      <ul>{renderedUsers}</ul>
    </section>
  )
}
