import React from "react"

const Contact: React.FC = () => {
  const [name, setName] = React.useState("")
  const [lastname, setLastname] = React.useState("")
  const [email, setEmail] = React.useState("")
  const id = React.useId()
  const id1 = React.useId()
  const id2 = React.useId()
  return (
    <div>
      <form action="submit">
        <label htmlFor={id}>Name</label>
        <input type="text" name={id} />
        <label htmlFor={id1}>Last Name</label>
        <input type="text" name={id1} />
        <label htmlFor={id2}>Email</label>
        <input type="text" name={id2} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
