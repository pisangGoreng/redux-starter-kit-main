import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsersById } from '../users/usersSlice'

export function PostAuthor({ userId }) {
  const author = useSelector((state) => selectUsersById(state, userId))

  return <span>by {author ? author.name : 'Unknown'}</span>
}
