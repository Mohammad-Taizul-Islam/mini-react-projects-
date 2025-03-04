import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const handleClick = () =>{
    setCount(count+1);
  }

  return (
    <>
      <h1>Count : {count} </h1>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default App
