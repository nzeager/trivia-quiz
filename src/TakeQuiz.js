import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const TakeQuiz = ({catID, setCatID}) => {
    // Maybe set up a useState to track when quiz is ongoing vs finished (to display results)
  
    // tracks the list of questions in the quiz
    const [questions, setQuestions] = useState([])
  
    useEffect(() => {
      // returns 10 mult choice questions with the requested category ID
      axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${catID}`).then((res) => setQuestions(res.data.results))
    }, [catID])

    // tracks the user's score
    const [score, setScore] = useState(0)

    // tracks the index of the question we are currently displaying
    const [questIndex, setQuestIndex] = useState(0)


    if (questions.length > 0) {
        let len = questions.length
        let category = questions[questIndex].category

        let question = questions[questIndex].question
        let correctAnswer = questions[questIndex].correct_answer

        let options=[]
        options=[...questions[questIndex].incorrect_answers,questions[questIndex].correct_answer]


        // let correctIndex = options.findIndex(questions[questIndex].correct_answer)

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
}