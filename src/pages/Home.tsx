import React, {
  ChangeEvent,
  ReactNode,
  Suspense,
  useState,
  useTransition,
} from "react"
import { data } from "../data"
import Post from "../Post"
import "../App.css"
import { nanoid } from "@reduxjs/toolkit"
const ContactComponent = React.lazy(() => import("./Contact"))

const Home: React.FC = () => {
  const [posts, setPosts] = useState(data)
  const [contactVisible, setContactVisible] = useState(false)
  const [value, setValue] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setValue(e.target.value)
    })
  }

  const handleClick = () => {
    setContactVisible((prev) => !prev)
  }

  return (
    <div>
      <div className="filterInput">
        <input
          type="text"
          placeholder="search"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="contact">
        <button type="button" onClick={handleClick}>
          Contact Form
        </button>
        {contactVisible ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            {<ContactComponent />}
          </Suspense>
        ) : null}
      </div>
      <div className="posts">
        {isPending
          ? "Loading..."
          : posts
              .filter((post) => post.title.includes(value))
              .map((post) => (
                <Post title={post.title} body={post.body} key={nanoid()} />
              ))}
      </div>
    </div>
  )
}

export default Home
