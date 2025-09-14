// src/App.js

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App(){
  const [message, setMessage] = React.useState('')

  useEffect(() => {
    axios.get('/api/test')
    .then(res =>{
      setMessage(res.data.message)
    })
    .catch(error => {
      console.error("there was an error with fetching data", error)
    })
  }, [])
  return(
    <div>
      <h1>My Task Tracker</h1>
      <p>Message from server: <strong>{message}</strong></p>
    </div>
  )
}

export default App