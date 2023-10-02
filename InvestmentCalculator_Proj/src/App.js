import React, { useState } from "react"
import logo from "./assets/investment-calculator-logo.png"
import { InputForm } from "./components/InputForm"
import { InvestmentTable } from "./components/InvestmentTable"
function App() {
  const [userInput, setUserInput] = useState({})
  const getUserInputData = (input) => {
    setUserInput(input)
  }

  console.log("userInput in App.js: ", userInput)

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InputForm onGetUserInputData={getUserInputData}></InputForm>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentTable></InvestmentTable>
      {/* No invetsment calculated yet*/}
    </div>
  )
}

export default App
