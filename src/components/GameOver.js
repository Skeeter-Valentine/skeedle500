import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, setGameOver, correctWord } = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You Guessed Correctly" : "You Failed"}</h3>
        <h1>Correct: {correctWord}</h1>
        
    </div>
  )
}

export default GameOver