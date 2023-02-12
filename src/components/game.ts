import {Player} from './scoreboard'

export type IncrementPointEvent = {
  player: Player
}

export type Game = {
  events: IncrementPointEvent[]
}

export function gameScore(game: Game, player: Player): number {
  return game.events.filter(event => event.player === player).length
}

export function isGameOver(game: Game): boolean {
  const scoreA = gameScore(game, 'PLAYER_A')
  const scoreB = gameScore(game, 'PLAYER_B')

  const isDeuceGame = scoreA >= 10 && scoreB >= 10

  if (isDeuceGame) {
    return Math.abs(scoreA - scoreB) >= 2
  } else {
    return scoreA >= 11 || scoreB >= 11
  }
}
