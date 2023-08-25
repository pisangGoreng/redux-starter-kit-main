import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { selectUsersById } from './usersSlice'
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice'

export function UsersPage({ match }) {
  const { userId } = match.params

  const user = useSelector((state) => selectUsersById(state, userId))

  // const postsForUser = useSelector((state) => {
  //   const allPosts = selectAllPosts(state)
  //   return allPosts.filter((post) => post.user === userId)
  // })

  const postsForUser = useSelector((state) => selectPostsByUser(state, userId))

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>
      <ul>{postTitles}</ul>
      <p>asas</p>
    </section>
  )
}
