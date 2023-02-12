import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Game, gameScore, isGameOver, winner} from './game'

export type Player = 'PLAYER_A' | 'PLAYER_B'

type FinishedGame = {
  game: Game,
  winner: Player,
}

export default function Scoreboard(): JSX.Element {
  const [pastGames, setPastGames] = useState<FinishedGame[]>([])
  const [currentGame, setCurrentGame] = useState<Game>({events: []})
  const [playerOrder, setPlayers] = useState<Player[]>(['PLAYER_A', 'PLAYER_B'])

  useEffect(() => {
    // run after the point increment has been rendered
    if (isGameOver(currentGame)) {
      if (window.confirm('the game is over! Do you want to start the next game?')) {
        setPastGames([...pastGames, {game: currentGame, winner: winner(currentGame)}])
        setCurrentGame({events: []})
      }
    }
  }, [currentGame, setPastGames, pastGames])

  function matchScore(player: Player) {
    return pastGames.filter(game => game.winner === player).length
  }

  function undo() {
    if (currentGame.events.length === 0) return
    setCurrentGame({events: currentGame.events.slice(0, currentGame.events.length - 1)})
  }

  function changeCourt() {
    setPlayers([playerOrder[1], playerOrder[0]])
  }

  function incrementPoint(currentGame: Game, player: Player) {
    const game = {events: [...currentGame.events, {player}]}
    setCurrentGame(game)
  }

  function reset() {
    if (window.confirm('Are you sure you want to clear all game and match data?')) {
      setPastGames([])
      setCurrentGame({events: []})
    }
  }

  return (
    <StyledScoreboard>
      <StyledPointScore onClick={() => incrementPoint(currentGame, playerOrder[0])}>
        {gameScore(currentGame, playerOrder[0])}
      </StyledPointScore>

      <Middle>
        <SetScores>
          <StyledGameScore>{matchScore(playerOrder[0])}</StyledGameScore>

          <Spacer />

          <StyledGameScore>{matchScore(playerOrder[1])}</StyledGameScore>
        </SetScores>

        <ButtonContainer>
          <Button onClick={undo}>undo</Button>
          <Button onClick={changeCourt}>change court</Button>
          <Button onClick={reset}>reset</Button>
        </ButtonContainer>
      </Middle>

      <StyledPointScore onClick={() => incrementPoint(currentGame, playerOrder[1])}>
        {gameScore(currentGame, playerOrder[1])}
      </StyledPointScore>
    </StyledScoreboard>
  )
}

const Spacer = styled.div`
  width: 8%;
`

const StyledScoreboard = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
`

const scoreCommonStyles = `
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
`

const fontSize = 36 // vmin

const StyledPointScore = styled.div`
  width: 30%;
  height: 100%;
  font-size: ${fontSize}vmin;
  ${scoreCommonStyles}
`

const StyledGameScore = styled.div`
  width: 50%;
  height: 100%;
  font-size: ${fontSize / 2}vmin;
  ${scoreCommonStyles}
`

const Middle = styled.div`
  width: 30%;
  padding-left: 2%;
  padding-right: 2%;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-right: 0;
`

const SetScores = styled.div`
  display: flex;
  height: 50%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Button = styled.button`
  width: 46%;
  height: 10vw;
  font-size: 3vmin;
  border: none;
  border-radius: 8px;
  background: gray;
  color: white;
  cursor: pointer;
  margin-top: 5%;
`
