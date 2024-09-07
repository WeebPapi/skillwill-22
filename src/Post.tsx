import React from "react"

interface PostInterface {
  title: string
  body: string
}

const Post: React.FC<PostInterface> = ({ title, body }) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Post
