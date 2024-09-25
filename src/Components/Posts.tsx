import React from "react"
import { PostType } from "../data"
import { nanoid } from "@reduxjs/toolkit"
import Post from "./Post"

interface PostsProps {
  posts: PostType[]
  isPending: boolean
  searchValue: string
}

const Posts: React.FC<PostsProps> = ({ posts, isPending, searchValue }) => {
  return (
    <div className="posts">
      {isPending
        ? "Loading..."
        : posts
            .filter((post) => post.title.includes(searchValue))
            .map((post) => (
              <Post title={post.title} body={post.body} key={nanoid()} />
            ))}
    </div>
  )
}

export default Posts
