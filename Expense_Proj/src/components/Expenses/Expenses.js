import React, { useState } from "react"

import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter"
import Card from "../UI/Card"
import "./Expenses.css"

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020")

  const expenseFilter = (year) => {
    setFilterYear(year)
  }

  const filteredExpenses = props.items.filter((item) => {
    // return item.date.getFullYear().toString() === filterYear
    return true
  })

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onExpenseFilter={expenseFilter} year={filterYear} />
        {filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          )
        })}
      </Card>
    </>
  )
}

export default Expenses
