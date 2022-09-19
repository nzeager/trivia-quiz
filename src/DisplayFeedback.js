export const DisplayFeedback = ({status, correctAnswer, questIndex, setQuestIndex, setFeedback}) => {
    return(
        <>
            {(status === 'C')
                ? <div className='feedback-correct'>Correct</div>
                : <div className='feedback-incorrect'>Incorrect</div>
            }
            <div className='correct-answer'>Correct Answer: {correctAnswer}</div>
            <div>
                <button className='next' onClick={() => {
                    setQuestIndex(questIndex+1);
                    setFeedback(false)
                }}> Next Question </button>
            </div>
        </>
    )
}