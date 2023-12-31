import React, { useContext } from "react"

import classes from "./Navigation.module.css"
import { AuthContext } from "../../store/auth-context"

const Navigation = () => {
  const contextData = useContext(AuthContext)
  return (
    // <AuthContext.Consumer.Consumer>
    //   {(contextData) => {
    // return (
    <nav className={classes.nav}>
      <ul>
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <button onClick={contextData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    // )
    //   }}
    // </AuthContext.Consumer.Consumer>
  )
}

export default Navigation
