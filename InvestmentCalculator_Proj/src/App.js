import React, { useState } from "react"
import { Header } from "./components/Header"
import { InputForm } from "./components/InputForm"
import { InvestmentTable } from "./components/InvestmentTable"
function App() {
  const [userInput, setUserInput] = useState({})
  const [yearlyData, setYearlyData] = useState([])
  const getUserInputData = (input) => {
    setUserInput(input)
    calculateHandler(input)
  }

  const formatAmt = (input) => {
    // console.log(input.toFixed(2))
    // return "$" + input.toFixed(2)
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(input)
  }
  const calculateHandler = (userInput) => {
    const yearlyData = [] // per-year results

    let currentSavings = +userInput["current-savings"] // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"] // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100
    const duration = +userInput["duration"]
    let currentInterest = 0
    let investedCapital = currentSavings
    // The below code calculates yearly results (total savings, interest etc)

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      currentInterest += yearlyInterest
      investedCapital += yearlyContribution
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: formatAmt(yearlyInterest),
        savingsEndOfYear: formatAmt(currentSavings),
        yearlyContribution: formatAmt(yearlyContribution),
        interestEndOfYear: formatAmt(currentInterest),
        investedEndOfYear: formatAmt(investedCapital),
      })
    }

    // do something with yearlyData ...
    setYearlyData(yearlyData)
  }

  const resetData = () => {
    setYearlyData([])
  }
  return (
    <div>
      <Header></Header>
      <InputForm
        onGetUserInputData={getUserInputData}
        onResetButton={resetData}
      ></InputForm>

      {yearlyData.length > 0 && (
        <InvestmentTable yearlyData={yearlyData}></InvestmentTable>
      )}
      {yearlyData.length === 0 && (
        <p className="actions result"> No invetsment calculated yet.</p>
      )}
    </div>
  )
}

export default App
