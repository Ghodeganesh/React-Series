import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(10)

  const add = () => {
    if (count < 20) {
      setCount(count + 1)

    }
    return 0;
  }
  const sub = () => {
    if (count > 0) {
      setCount(count - 1)

    }
    return 0;
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Counter Val : {count}</h1>
      <button onClick={add}>Add Val:{count}</button>
      <br />
      <button onClick={sub}>Sub Val:{count}</button>

    </>
  )
}

export default App
