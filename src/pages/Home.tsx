import React, {
  ChangeEvent,
  ReactNode,
  Suspense,
  useState,
  useTransition,
} from "react"
import { data } from "../data"
import Post from "../Components/Post"
import "../App.css"
import { nanoid } from "@reduxjs/toolkit"
import FilterInput from "../Components/FilterInput"
import ContactPageComponent from "../Components/ContactPageComponent"
import Posts from "../Components/Posts"

const Home: React.FC = () => {
  const [isPending, startTransition] = React.useTransition()
  const [posts, setPosts] = useState(data)
  const [value, setValue] = React.useState("")

  return (
    <div>
      <FilterInput
        value={value}
        setValue={setValue}
        startTransition={startTransition}
      />
      <ContactPageComponent />
      <Posts searchValue={value} posts={posts} isPending={isPending} />
    </div>
  )
}

export default Home
