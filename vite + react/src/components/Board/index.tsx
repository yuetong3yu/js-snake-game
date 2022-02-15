import React, { useState } from 'react'

import { TPosition } from '../../types'
import { isEqualPosition } from '../../utils'
import { BOARD_SIZE, initialApplePosition } from './const'

interface IProps {}

export const Board: React.FC<IProps> = (props) => {
  const [applePosition, setApplePosition] =
    useState<TPosition>(initialApplePosition)

  console.log('123 apple', applePosition)

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
              const poi: TPosition = [rowIndex, itemIndex]
              const isApple = isEqualPosition(poi, applePosition)

              return <div className={`cell ${isApple ? 'apple' : ''}`}></div>
            })}
          </div>
        )
      })}
    </div>
  )
}
