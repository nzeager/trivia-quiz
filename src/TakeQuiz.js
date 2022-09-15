import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const TakeQuiz = ({catID, setCatID}) => {
    // Maybe set up a useState to track when quiz is ongoing vs finished (to display results)
  
    const [questions, setQuestions] = useState([])
  
    useEffect(() => {
      // returns 10 mult choice questions with the requested category ID
      axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${catID}`).then((res) => setQuestions(res.data.results))
    }, [])
  
    return(
      <>
        <p>Here's the quiz page</p>
        <div><button onClick={() => {setCatID(null)}}> Return to Categories </button></div>
        {console.log(questions)}
        <div>{questions.length > 0 && questions[0].question}</div>
      </>
    )
  }