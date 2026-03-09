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
      {/* Display the formatted current date and time */}
      <p>{format(time, 'EEEE, MMMM do, yyyy HH:mm:ss')}</p>
    </div>
  )
}

export default App
