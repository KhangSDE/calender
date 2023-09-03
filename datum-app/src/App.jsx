import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DateCalculate from './components/DateCalculate'
import DateInXDays from './components/DateInXDays'
import TodaysDate from './components/TodaysDate'

function App() {
  
  return (
    <div>
      <DateCalculate />
      <DateInXDays />
      <TodaysDate />
    </div>
    

  )
}

export default App
