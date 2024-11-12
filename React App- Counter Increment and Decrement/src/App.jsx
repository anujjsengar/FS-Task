import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [joke, setJoke] = useState("") // Added joke state

  async function getjoke() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await response.json();
      if (data.type === "single") {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} ... ${data.delivery}`); // Fixed template literal syntax
      }
    } catch (error) {
      console.log(error);
      setJoke("Oops! Could not fetch joke");
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p><button>{count1}</button></p>
        <p>
          <button onClick={() => setCount1(count1 + 1)}>Increase the counter1</button>
          <button onClick={() => setCount1(count1 - 1)}>Decrease the counter1</button>
        </p>
        <p><button>{count2}</button></p>
        <p>
          <button onClick={() => setCount2(count2 + 1)}>Increase the counter2</button>
          <button onClick={() => setCount2(count2 - 1)}>Decrease the counter2</button>
        </p>
        <button>
          Square of Sum of Both Counter: {(count1 + count2) * (count1 + count2)}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={getjoke}>Get Joke</button>
        <p>{joke}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
