import { useState } from "react";

function App() {
  const [res, setRes] = useState(0);
  const [joke, setJoke] = useState("");

  function increment() {
    setRes(res + 1);
  }

  function decrement() {
    setRes(res - 1);
  }

  async function getjoke() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await response.json();
      if (data.type === "single") {
        setJoke(data.joke);
      } else {
        setJoke(${data.setup} ... ${data.delivery});
      }
    } catch (error) {
      console.log(error);
      setJoke("Oops! Could not fetch joke");
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={increment}>Increment</button>
      <span>{res}</span>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={getjoke}>Get Joke</button>
      <p>{joke}</p>
    </>
  );
}

export default App;