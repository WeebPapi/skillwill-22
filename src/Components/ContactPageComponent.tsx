import React from "react"
import { Suspense } from "react"
const ContactComponent = React.lazy(() => import("../pages/Contact"))

const ContactPageComponent = () => {
  const [contactVisible, setContactVisible] = React.useState(false)

  const handleClick = () => {
    setContactVisible((prev) => !prev)
  }
  return (
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
  )
}

export default ContactPageComponent
