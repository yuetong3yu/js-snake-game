import React, { useState } from 'react'

import { Board } from './components/Board'
import { randomNumber } from './utils'

const initialApplePosition = [randomNumber(0, 19), randomNumber(0, 19)]

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <h1>🐍 React Snake Game</h1>
      <Board />
    </div>
  )
}
