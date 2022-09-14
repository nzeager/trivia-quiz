import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [quiz, setQuiz] = useState(false)

  return (
    <>
      <h1>Trivia Game</h1>
      <ContentDisplay quiz={quiz} setQuiz={setQuiz} />
    </>
  );
}

const ContentDisplay = ({quiz, setQuiz}) => {
  if (!quiz) {
    return(<DisplayCategories setQuiz={setQuiz} />)
  }
  return(<TakeQuiz setQuiz={setQuiz} />)
}

const DisplayCategories = ({setQuiz}) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    console.log('useEffect runs')
    axios.get('https://opentdb.com/api_category.php').then((res) => setCategories(res.data.trivia_categories))
  }, [])

  return (
    <>
      <h2>Select a Category</h2>
      <div className='cat-list'>
        {console.log(categories)}
        {categories.map((cat) => (
          <div><button key={cat.id} onClick={() => {setQuiz(true)}}> {cat.name} </button></div>
          // <div><button key={cat.id}> {cat.name} </button></div>
        ))}
      </div>
    </>
  )
}

const TakeQuiz = ({setQuiz}) => {
  return(
    <>
      <p>Here's the quiz page</p>
      <div><button onClick={() => {setQuiz(false)}}> Return to Categories </button></div>
    </>
  )
}

export default App;
