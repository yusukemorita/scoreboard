import {Game, IncrementPointEvent, gameScore, isGameOver, winner} from './game'

test('gameScore: returns correct value for each player', () => {
  const events: IncrementPointEvent[] = [
    {player: 'PLAYER_A'},
    {player: 'PLAYER_A'},
    {player: 'PLAYER_B'},
    {player: 'PLAYER_B'},
    {player: 'PLAYER_A'},
  ]

  const game = {events}

  expect(gameScore(game, 'PLAYER_A')).toBe(3)
  expect(gameScore(game, 'PLAYER_B')).toBe(2)
})

test('gameScore: increments player\'s score when IncrementPointEvent is passed', () => {
  const game: Game = {events: []}

  expect(gameScore(game, 'PLAYER_A')).toBe(0)

  game.events.push({player: 'PLAYER_A'})

  expect(gameScore(game, 'PLAYER_A')).toBe(1)
})


test('isGameOver: returns true when not deuce and one score has reached 11', () => {
  const game: Game = {events: []}

  for (let i = 1; i <= 10; i++) {
    game.events.push({player: 'PLAYER_A'})
  }

  expect(isGameOver(game)).toBe(false)

  game.events.push({player: 'PLAYER_A'})

  expect(isGameOver(game)).toBe(true)
})

test('isGameOver: returns false when deuce (10 vs 11)', () => {
  const game: Game = {events: []}

  for (let i = 1; i <= 10; i++) {
    game.events.push({player: 'PLAYER_A'})
  }

  for (let i = 1; i <= 11; i++) {
    game.events.push({player: 'PLAYER_B'})
  }

  expect(isGameOver(game)).toBe(false)

  game.events.push({player: 'PLAYER_B'})

  expect(isGameOver(game)).toBe(true)
})

test('winner: returns player with higher score', () => {
  const game: Game = {events: []}

  for (let i = 1; i <= 9; i++) {
    game.events.push({player: 'PLAYER_A'})
  }

  for (let i = 1; i <= 11; i++) {
    game.events.push({player: 'PLAYER_B'})
  }

  expect(winner(game)).toBe('PLAYER_B')
})
