import { TPosition } from '../../types'
import { randomNumber } from '../../utils'

export const BOARD_SIZE = 20

export const initialApplePosition: TPosition = [
  randomNumber(0, BOARD_SIZE - 1),
  randomNumber(0, BOARD_SIZE - 1),
]
