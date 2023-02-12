import React, {useState} from 'react'
import styled from 'styled-components'
import {Game, gameScore, isGameOver} from './game'

export type Player = 'PLAYER_A' | 'PLAYER_B'
type Event = 'INCREMENT_GAME_A' | 'INCREMENT_GAME_B'

export default function Scoreboard(): JSX.Element {
  const [currentGame, setCurrentGame] = useState<Game>({events: []})
  const [events, setEvents] = useState<Event[]>([])
  const [playerOrder, setPlayers] = useState<Player[]>(['PLAYER_A', 'PLAYER_B'])

  function addEvent(event: Event) {
    setEvents([...events, event])
  }

  function matchScore(player: Player) {
    switch(player) {
      case 'PLAYER_A':
        return events.filter(e => e === 'INCREMENT_GAME_A').length
      case 'PLAYER_B':
        return events.filter(e => e === 'INCREMENT_GAME_B').length
    }
  }

  function incrementGame(player: Player) {
    switch(player) {
      case 'PLAYER_A':
        addEvent('INCREMENT_GAME_A')
        break;
      case 'PLAYER_B':
        addEvent('INCREMENT_GAME_B')
    }
  }

  function incrementGameLeft() {
    incrementGame(playerOrder[0])
  }

  function incrementGameRight() {
    incrementGame(playerOrder[1])
  }

  function resetScore() {
    setEvents([])
  }

  function undo() {
    if (currentGame.events.length === 0) return
    setCurrentGame({events: currentGame.events.slice(0, currentGame.events.length - 1)})
  }

  function changeCourt() {
    setPlayers([playerOrder[1], playerOrder[0]])
  }

  function incrementPoint(currentGame: Game, player: Player) {
    setCurrentGame({events: [...currentGame.events, {player}]})
  }

  return (
    <StyledScoreboard>
      <StyledPointScore onClick={() => incrementPoint(currentGame, playerOrder[0])}>
        {gameScore(currentGame, playerOrder[0])}
      </StyledPointScore>

      <Middle>
        <SetScores>
          <StyledGameScore onClick={incrementGameLeft}>
            {matchScore(playerOrder[0])}
          </StyledGameScore>

          <Spacer />

          <StyledGameScore onClick={incrementGameRight}>
            {matchScore(playerOrder[1])}
          </StyledGameScore>
        </SetScores>

        <ButtonContainer>
          <Button onClick={undo}>undo</Button>
          <Button onClick={changeCourt}>change court</Button>
          <Button onClick={resetScore}>reset</Button>
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
