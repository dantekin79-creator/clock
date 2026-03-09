import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <p>
        {format(time, 'EEEE, MMMM do, yyyy - HH:mm:ss')}
      </p>
    </div>
  )
}

export default App
