import React from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { useGetPostQuery } from '../../api/apiSlice'
import { Spinner } from '../../components/Spinner'

export function SinglePostPage({ match }) {
  const { postId } = match.params
  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

  let content
  if (isFetching) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
        </div>
        <p className="post-content">{post.content}</p>

        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>

        <p>
          <TimeAgo timestamp={post.date} />
        </p>
      </article>
    )
  }

  return <section>{content}</section>
}
