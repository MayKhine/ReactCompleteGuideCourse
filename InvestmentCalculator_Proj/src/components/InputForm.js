import React, { useState } from "react"
export const InputForm = (props) => {
  const [currentSaving, setCurrentSaving] = useState()
  const [yearlyContribution, setYearlyContribution] = useState()
  const [expectedInterest, setExpectedInterest] = useState()
  const [duration, setDuration] = useState()

  const onCurrentSavingHandler = (event) => {
    setCurrentSaving(event.target.value)
  }

  const onYearlyContributionHandler = (event) => {
    setYearlyContribution(event.target.value)
  }

  const onExpectedInterestnHandler = (event) => {
    setExpectedInterest(event.target.value)
  }

  const onDurationHandler = (event) => {
    setDuration(event.target.value)
  }
  const onSubmitButtonHandler = (event) => {
    event.preventDefault()

    const currentInput = {
      "current-savings": currentSaving,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedInterest,
      duration: duration,
    }
    // console.log("submit button is clicked and current input is: ", currentInput)
    props.onGetUserInputData(currentInput)
  }
  const onResetButtonHandler = () => {
    //reset
    props.onResetButton()
    setCurrentSaving("")
    setYearlyContribution("")
    setExpectedInterest("")
    setDuration("")
  }
  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSaving}
            onChange={onCurrentSavingHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={onYearlyContributionHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedInterest}
            onChange={onExpectedInterestnHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={onDurationHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button
          type="reset"
          className="buttonAlt"
          onClick={onResetButtonHandler}
        >
          Reset
        </button>
        <button
          type="submit"
          className="button"
          onClick={onSubmitButtonHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  )
}
