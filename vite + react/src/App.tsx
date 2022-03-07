import React, { useState } from 'react'

export const App: React.FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  return (
    <div className="wrapper">
      <h1>🐍 React Snake Game</h1>
      <button onClick={increment}>👍 click</button>
      <strong>Count: {count}</strong>
    </div>
  )
}
