export const DisplayQuestion = ({setCatID, questIndex, setQuestIndex, score, setScore, questions, category}) => {
    let question = questions[questIndex].question
    let correctAnswer = questions[questIndex].correct_answer

    let options=[]
    options=[...questions[questIndex].incorrect_answers,questions[questIndex].correct_answer]
    return(
        <>
            <div className='title'> 
                {category} Quiz 
            </div>
            <div className='score'>
                Score: {score}
            </div>
            <div className='question'> 
                Question {questIndex+1}: {question}
            </div>
            {options.map((option) => (
                <div onClick={() => {
                    setQuestIndex(questIndex+1);
                    (option === correctAnswer) ? setScore(score + 1) : setScore(score);
                }}> 
                    {option}
                </div>
            ))}
            <div>
                <button onClick={() => {setCatID(null)}}> Return to Categories </button>
            </div>
            {console.log(questions)}
        </>
    )
}