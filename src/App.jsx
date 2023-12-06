import { useState } from 'react'
import './App.css'
import Counter from './components/Counter.js'
import Stats from './components/stats.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="max-w-md mx-auto text-center text-2xl">
          SIMPLE COUNTER APPLICATION
        </h1>
        <div className="max-w-md mt-10">
          <Counter></Counter>
          <Stats count={count}></Stats>
        </div>
      </div>
    </>
  );
}

export default App
