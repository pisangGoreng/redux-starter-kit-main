import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { postUpdated, selectPostsById } from './postsSlice'
import { useEditPostMutation, useGetPostQuery } from '../../api/apiSlice'

export function EditPostForm({ match }) {
  const { postId } = match.params
  const dispatch = useDispatch()
  const history = useHistory()

  // const post = useSelector((state) => selectPostsById(state, postId))
  const { data: post } = useGetPostQuery(postId)
  const [updatePost, { isLoading }] = useEditPostMutation()

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onSavePostClicked = async () => {
    if (title && content) {
      await updatePost({
        id: postId,
        title,
        content,
      })
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit a post</h2>
      <form>
        <label htmlFor="postTitle">post title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postTitle">post content</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <button type="button" onClick={onSavePostClicked}>
          Save post
        </button>
      </form>
    </section>
  )
}
