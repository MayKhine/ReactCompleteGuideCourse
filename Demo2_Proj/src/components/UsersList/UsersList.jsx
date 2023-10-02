import classes from "./UsersList.module.css"
export const UserList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.userList.map((user) => {
          const text = user.name + "(" + user.age + " years old)"

          return <li>{text}</li>
        })}
      </ul>
    </div>
  )
}
