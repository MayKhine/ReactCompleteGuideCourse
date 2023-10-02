import { useState } from "react"
import { AddUser } from "./components/AddUser/AddUser"
import { UserList } from "./components/UsersList/UsersList"
import "./App.css"

function App() {
  const [userList, setUserList] = useState([])
  const getNewUser = (newUser) => {
    console.log("New user in App: ", newUser)
    setUserList((prevUserList) => [...prevUserList, newUser])
    console.log("UserList: ", userList)
  }
  return (
    <>
      <AddUser onAddUser={getNewUser} />
      <UserList userList={userList}></UserList>
    </>
  )
}

export default App
