import React, { useEffect, useState } from 'react'

import { TPosition } from '../../types'
import { isEqualPosition, randomNumber } from '../../utils'
import { BOARD_SIZE, initialApplePosition } from './const'

interface IProps {}

export const Board: React.FC<IProps> = (props) => {
  const [applePosition, setApplePosition] =
    useState<TPosition>(initialApplePosition)
  const [snakePositions, setSnakePositions] = useState<TPosition[]>([[10, 10]])

  /**
   * reset apple position, if apple position is equal to snake position
   */
  useEffect(() => {
    if (snakePositions.some((i) => isEqualPosition(i, applePosition))) {
      setApplePosition([
        randomNumber(0, BOARD_SIZE - 1),
        randomNumber(0, BOARD_SIZE - 1),
      ])
    }
  }, [applePosition, snakePositions])

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
              const isSnake = snakePositions.some((i) =>
                isEqualPosition(i, poi)
              )

              return (
                <div
                  className={`cell ${isApple ? 'apple' : ''} ${
                    isSnake ? 'snake' : ''
                  }`}
                ></div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
