import _ from 'lodash'
import { useState } from 'react'
import { DisplayFeedback } from './DisplayFeedback'

export const DisplayQuestion = ({setCatID, questIndex, setQuestIndex, score, setScore, questions, category}) => {

    // tracks whether question has been answered to display feedback
    const [feedback, setFeedback] = useState(false)

    // Fixes questions text output
    const htmlDecode = input => new DOMParser()
        .parseFromString(input, "text/html")
        .documentElement.textContent

    let question = htmlDecode(questions[questIndex].question)
    let correctAnswer = questions[questIndex].correct_answer

    let options=[]
    options=[...questions[questIndex].incorrect_answers,questions[questIndex].correct_answer]
    let shuffleOptions = _.shuffle(options)

    // tracks whether user answers question correctly
    let status = ''

    // Determines what happens to states when clicking a correct/incorrect answer option
    const checkAns = (option, correctAnswer) => {
        if (option === correctAnswer) {
            setScore(score+1)
            status='C'
        }
        setFeedback(true)
    }

    return(
        <>
            <div className='score'>
                Score: {score}
            </div>
            <div className='question'> 
                <span className='question-label'>Question {questIndex+1}:</span> {question}
            </div>
            <div className='options'>
                {shuffleOptions.map((option) => (
                    <button className='option' onClick={() => checkAns(option, correctAnswer)}>
                        {htmlDecode(option)}
                    </button>
                ))}
            </div>
            {(feedback === true) && <DisplayFeedback status={status} correctAnswer={correctAnswer} questIndex={questIndex} setQuestIndex={setQuestIndex} setFeedback={setFeedback} />}
        </>
    )
}