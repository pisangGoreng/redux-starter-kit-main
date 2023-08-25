import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionsEmoji = {
  thumbsUp: 'thumbsUp',
  hooray: 'hooray',
  raisingHands: 'raisingHands',
  heart: 'heart',
  rocket: 'rocket',
}

export function ReactionButtons({ post }) {
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionsEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          className="muted-button reaction-button"
          onClick={() =>
            dispatch(
              reactionAdded({
                postId: post.id,
                reaction: name,
              })
            )
          }
        >
          {emoji}
          {post.reactions[name]}
        </button>
      )
    }
  )
  return <div>{reactionButtons}</div>
}
