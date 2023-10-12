import React, { useCallback, useState } from "react"

import Button from "./components/UI/Button/Button"
import DemoOutput from "./components/Demo/DemoOutput"
// import DemoOutput from "./components/Demo/DemoOutput"
import "./App.css"

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) setShowParagraph(!showParagraph)
  }, [allowToggle])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={setAllowToggle}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
