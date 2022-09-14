import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  return (
    <>
      <h1>Trivia Game</h1>
      <DisplayCategories />
      
    </>
  );
}


const DisplayCategories = () => {
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
          <div><button key={cat.id}> {cat.name} </button></div>
        ))}
      </div>
    </>
  )
}

export default App;
