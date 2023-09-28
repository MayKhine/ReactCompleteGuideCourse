import React, { useState } from "react"

import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
  const [toggleAddButton, setToggleAddButton] = useState(false)
  const addNewExpenseHandler = () => {
    setToggleAddButton(true)
  }
  const cancelNewExpenseHandler = () => {
    setToggleAddButton(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log("in new expense js ", enteredExpenseData)
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
    props.onAddExpense(expenseData)
    setToggleAddButton(false)
  }
  return (
    <div className="new-expense">
      {!toggleAddButton && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {toggleAddButton && (
        <ExpenseForm
          cancelNewExpense={cancelNewExpenseHandler}
          saveExpense={saveExpenseDataHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
