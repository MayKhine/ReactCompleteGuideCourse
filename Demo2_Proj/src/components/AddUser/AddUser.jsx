import classes from "./AddUser.module.css"
import { useState, useRef } from "react"
import { Button } from "../Button/Button"
import { ErrorModal } from "../ErrorModal/ErrorModal"
import { Wrapper } from "../Helpers/Wrapper"
export const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  // const [name, setName] = useState("")
  // const [age, setAge] = useState("")
  const [errorText, setErrorText] = useState("")
  const onAddUserHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    // if (name.length == 0 || age.length == 0 || parseInt(age) != age) {
    if (
      enteredName.length == 0 ||
      enteredAge.length == 0 ||
      parseInt(enteredAge) != enteredAge
    ) {
      setErrorText("Please enter a valid name and age (non-empty values).")
      setError(true)
      return
    }
    // if (age <= 0) {
    if (enteredAge <= 0) {
      setErrorText("Please enter a valid age (>0).")
      setError(true)
      return
    } else {
      // const user = { key: Math.random(), name, age }
      const user = { key: Math.random(), name: enteredName, age: enteredAge }
      console.log(enteredName, enteredAge, user)

      props.onAddUser(user)
      nameInputRef.current.value = "" //rarely do that to manipulate the dom, here we are chaning the value entered by user
      ageInputRef.current.value = ""
      // setName("")
      // setAge("")
    }
  }
  const [error, setError] = useState(false)
  return (
    <Wrapper>
      <div>
        <label className={classes.label}>Username</label>
        <input
          className={classes.input}
          // value={name}
          // onChange={(event) => setName(event.target.value)}
          ref={nameInputRef}
        ></input>
      </div>
      <div>
        <label className={classes.label}>Age(Years)</label>
        <input
          className={classes.input}
          // value={age}
          // onChange={(event) => setAge(event.target.value)}
          ref={ageInputRef}
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
