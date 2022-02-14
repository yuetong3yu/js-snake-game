import React, { useState } from 'react'

import { Board } from './components/Board'

export const App: React.FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  return (
    <div className="wrapper">
      <h1>🐍 React Snake Game</h1>
      <Board />
    </div>
  )
}
