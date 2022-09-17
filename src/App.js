import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import {DisplayCategories} from './DisplayCategories'
import {TakeQuiz} from './TakeQuiz'

function App() {
  // tracks the category ID # that the user selects
  const [catID, setCatID] = useState(null)

  return (
    <>
      <h1>Trivia Game</h1>
      <ContentDisplay catID={catID} setCatID={setCatID} />
    </>
  );
}

const ContentDisplay = ({catID, setCatID}) => {
  if (!catID) {
    return(<DisplayCategories setCatID={setCatID} />)
  }
  return(<TakeQuiz catID={catID} setCatID={setCatID} />)
}

export default App;
