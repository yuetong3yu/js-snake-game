import { TPosition } from '../types'

/**
 * Generate a number between min and max
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Judge if two positions are equal
 */
export function isEqualPosition(pos1: TPosition, pos2: TPosition): boolean {
  return pos1[0] === pos2[0] && pos1[1] === pos2[1]
}
