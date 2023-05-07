import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="tryagain-button" onClick={props.tryAgain}>Try Again</button>

    </>
  )
}

export default QuizResult