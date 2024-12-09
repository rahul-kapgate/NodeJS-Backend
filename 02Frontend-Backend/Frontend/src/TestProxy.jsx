import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TestProxy() {

    const [age , setAge ] = useState(0)


    useEffect( () => {
        axios.get("/api/age")
        .then( (response) =>{
            console.log(response.data)
           setAge(response.data)
        })
    }, [])

  return (
    <div>
      <h1>Age : {age }</h1>
    </div>
  )
}

export default TestProxy
