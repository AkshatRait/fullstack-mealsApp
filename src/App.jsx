import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [meals,setMeals]=useState([]);
  const [clickedMeal,setClickedMeal]=useState();

  useEffect(()=>{
    axios({
      method: "GET",
      url: "http://localhost:3000/meals",
    }).then((res)=>{
      setMeals(res.data)
    })
  },[])

  
console.log(meals);
  return (
    <>
      <h1>Show meals here:</h1>
      {meals.map((meal) => (
        <ul key={meal.name}>
          <h2>{meal.name}</h2>
          <img src={meal.picture} alt={meal.name} />
        </ul>
      ))}
    </>
  )
}

export default App
