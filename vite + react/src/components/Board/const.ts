import { TPosition } from '../../types'
import { randomNumber } from '../../utils'

export const BOARD_SIZE = 20

export const initialApplePosition: TPosition = [
  randomNumber(0, 19),
  randomNumber(0, 19),
]
