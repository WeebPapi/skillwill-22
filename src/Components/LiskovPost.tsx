import React from "react"
import Post from "./Post"
import { PostType } from "../data"

interface LiskovPostProps extends PostType {
  image: string
}

const LiskovPost: React.FC<LiskovPostProps> = ({ image, title, body }) => {
  return (
    <>
      <img src={image} />
      <Post title={title} body={body} />
    </>
  )
}

export default LiskovPost
