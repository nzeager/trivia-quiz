import { htmlDecode } from './utils'

export const DisplayFeedback = ({isCorrect, setIsCorrect, correctAnswer, questIndex, setQuestIndex, setFeedback}) => {
    return(
        <>
            {(isCorrect === 'C')
                ? <div className='feedback-correct'>Correct</div>
                : <div className='feedback-incorrect'>Incorrect</div>
            }
            <div className='correct-answer'>Correct Answer: {htmlDecode(correctAnswer)}</div>
            <div>
                <button className='next' onClick={() => {
                    setQuestIndex(questIndex+1);
                    setFeedback(false)
                    setIsCorrect('')
                }}> Next Question </button>
            </div>
        </>
    )
}