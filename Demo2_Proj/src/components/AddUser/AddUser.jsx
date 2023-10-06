import classes from "./AddUser.module.css"
import { useState } from "react"
import { Button } from "../Button/Button"
import { ErrorModal } from "../ErrorModal/ErrorModal"
import { Wrapper } from "../Helpers/Wrapper"
export const AddUser = (props) => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [errorText, setErrorText] = useState("")
  const onAddUserHandler = (event) => {
    event.preventDefault()

    if (name.length == 0 || age.length == 0 || parseInt(age) != age) {
      setErrorText("Please enter a valid name and age (non-empty values).")
      setError(true)
      return
    }
    if (age <= 0) {
      setErrorText("Please enter a valid age (>0).")
      setError(true)
      return
    } else {
      const user = { key: Math.random(), name, age }
      props.onAddUser(user)
      setName("")
      setAge("")
    }
  }
  const [error, setError] = useState(false)
  return (
    <Wrapper>
      <div>
        <label className={classes.label}>Username</label>
        <input
          className={classes.input}
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div>
        <label className={classes.label}>Age(Years)</label>
        <input
          className={classes.input}
          value={age}
          onChange={(event) => setAge(event.target.value)}
        ></input>
      </div>
      <Button text="Add User" onClickHandler={onAddUserHandler} />
      {error && (
        <ErrorModal
          text={errorText}
          errorOnClickHandler={() => {
            setError(false)
          }}
        ></ErrorModal>
      )}
    </Wrapper>
  )
}
