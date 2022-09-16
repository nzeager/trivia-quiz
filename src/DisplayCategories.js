import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const DisplayCategories = ({setCatID}) => {
    const [categories, setCategories] = useState([])
  
    useEffect(() => {
      axios.get('https://opentdb.com/api_category.php').then((res) => setCategories(res.data.trivia_categories))
    }, [])
  
    return (
      <>
        <h2>Select a Category</h2>
        <div className='cat-list'>
          {categories.map((cat) => (
            <div><button key={cat.id} onClick={() => {setCatID(cat.id)}}> {cat.name} </button></div>
          ))}
        </div>
      </>
    )
  }