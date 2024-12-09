import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=> {
     axios.get('/api/jokes')   // Proxy
     .then( (response) => {
      setJokes(response.data)
     })
     .catch( (error) => {
      console.log("Backend Not Working  ")
      // setJokes(["Backend Not Working"]);   worng way
       setJokes([{ id: 0, title: "Error", content: "Backend Not Working" }]);
     })
      
  }, [])

  return (
    <>
    <h1>Jokes App</h1>
    <h3>JOKES : {jokes.length} </h3>

    {
      jokes.map( (joke,index) => (
        <div key={joke.id || index}>
        <h4>{joke.title}</h4>
          <h4>{joke.content}</h4>
        </div>
      ))
    }

    </>
  )
}

export default App
