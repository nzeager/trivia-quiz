import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const TakeQuiz = ({catID, setCatID}) => {
    // Maybe set up a useState to track when quiz is ongoing vs finished (to display results)
  
    // 
    const [questions, setQuestions] = useState([])
  
    useEffect(() => {
      // returns 10 mult choice questions with the requested category ID
      axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${catID}`).then((res) => setQuestions(res.data.results))
    }, [])

    const [questIndex, setQuestIndex] = useState(0)
    const len = questions.length



    if (questions.length > 0) {
        return(
            <>
                {console.log(questIndex)}
                <div className='title'> {questions[questIndex].category} Quiz </div>
                <div className='question'> Question {questIndex+1}: {questions[questIndex].question}</div>
                <div onClick={() => setQuestIndex(questIndex+1)}> {questions[questIndex].correct_answer}</div>
                <div><button onClick={() => {setCatID(null)}}> Return to Categories </button></div>
                {console.log(questions)}
            </>
        )
    }
}