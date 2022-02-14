import React from 'react'

import { BOARD_SIZE } from './const'

export const Board: React.FC = () => {
  return (
    <div
      className="board-wrapper"
      style={{
        width: Math.pow(BOARD_SIZE, 2),
        height: Math.pow(BOARD_SIZE, 2),
      }}
    >
      {Array.from(Array(BOARD_SIZE)).map((_, rowIndex) => {
        return (
          <div className="row">
            {Array.from(Array(BOARD_SIZE)).map((_, itemIndex) => {
              return <div className="cell"></div>
            })}
          </div>
        )
      })}
    </div>
  )
}
