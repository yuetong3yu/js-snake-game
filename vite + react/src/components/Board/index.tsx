import React, { useEffect, useRef, useState } from 'react'

import { TPosition, Direction } from '../../types'
import { isEqualPosition, randomPosition, nodeMoving } from '../../utils'
import { BOARD_SIZE } from './const'

interface IProps {}

export const Board: React.FC<IProps> = () => {
  const [applePosition, setApplePosition] = useState<TPosition>(
    randomPosition()
  )
  const [snakePositions, setSnakePositions] = useState<TPosition[]>([
    [10, 10],
    [9, 10],
    [8, 10],
  ])
  const snakePoisRef = useRef<TPosition[]>(snakePositions)
  const directionRef = useRef<Direction>(Direction.Up)
  const headNodeRef = useRef<TPosition>(snakePositions[0])

  const move = () => {
    const newHeadNode = nodeMoving(headNodeRef.current, directionRef.current)
    const tailNodes = snakePoisRef.current.slice(
      0,
      snakePoisRef.current.length - 1
    )
    const newPois = [newHeadNode, ...tailNodes]
    setSnakePositions(newPois)
    headNodeRef.current = newPois[0]
  }

  /**
   * reset apple position, if apple position is equal to snake position
   */
  useEffect(() => {
    if (snakePositions.some((i) => isEqualPosition(i, applePosition))) {
      setApplePosition(randomPosition())
    }
  }, [applePosition, snakePositions])

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      switch (ev.code) {
        case 'ArrowUp': {
          directionRef.current = Direction.Up
          setTimeout(() => move())
          break
        }
        case 'ArrowDown': {
          directionRef.current = Direction.Down
          setTimeout(() => move())
          break
        }
        case 'ArrowLeft': {
          directionRef.current = Direction.Left
          setTimeout(() => move())
          break
        }
        case 'ArrowRight': {
          directionRef.current = Direction.Right
          setTimeout(() => move())
          break
        }
        default:
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    snakePoisRef.current = snakePositions
  }, [snakePositions])

  return (
    <>
      <div
        className="board-wrapper"
        style={{
          width: Math.pow(BOARD_SIZE, 2),
          height: Math.pow(BOARD_SIZE, 2),
        }}
      >
        {Array.from(Array(BOARD_SIZE)).map((_, y) => {
          return (
            <div className="row" key={y}>
              {Array.from(Array(BOARD_SIZE)).map((_, x) => {
                const poi: TPosition = [x, y]
                const isApple = isEqualPosition(poi, applePosition)
                const isSnake = snakePositions.some((i) =>
                  isEqualPosition(i, poi)
                )

                return (
                  <div
                    key={x}
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
    </>
  )
}
