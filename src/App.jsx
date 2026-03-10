import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

// Main App component for the dynamic clock
function App() {
  // State to hold the current time, initialized with new Date()
  const [time, setTime] = useState(new Date());

  // useEffect hook to set up an interval that updates the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <h1>Dynamic Clock</h1>
      {/* Display formatted current date and time together for the lab requirement */}
      <p>{format(time, 'PPpp')}</p>
      {/* Display the formatted current date and time in separate p tags */}
      <p className="date">{format(time, 'EEEE, MMMM do, yyyy')}</p>
      <p className="time">{format(time, 'HH:mm:ss')}</p>
    </div>
  )
}

export default App
