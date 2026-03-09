import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

const App = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <h1>Dynamic Clock</h1>
      <p>{format(time, 'MMMM do, yyyy, h:mm:ss a')}</p>
    </div>
  )
}

export default App
