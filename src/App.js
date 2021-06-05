import React, { useState, useEffect } from 'react'
import ContactCard from './ContactCard'
import './App.css'

function App() {

  const [results, setResults] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => {
        setResults(data.results)
      });
  }, [])


  return (
    <div>
      {results.map((result, index) => (
        <ContactCard key={index}
          avatarUrl={result.picture.large}
          name={result.name.first + ' ' + result.name.last}
          email={result.email}
          age={result.dob.age}
        />
      ))}
    </div>
  )
}

export default App


