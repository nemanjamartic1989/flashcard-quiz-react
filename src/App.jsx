import React, { useState } from "react"
import FlashcardList from "./FlashcardList"

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASCARDS)
  return (
    <FlashcardList flashcards={flashcards}/>
  )
}

const SAMPLE_FLASCARDS = [

]

export default App
