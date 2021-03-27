import React, {useState} from 'react'
import styled from 'styled-components'

type Player = 'PLAYER_A' | 'PLAYER_B'
type Event = 'INCREMENT_POINT_A' | 'INCREMENT_POINT_B' | 'INCREMENT_GAME_A' | 'INCREMENT_GAME_B'

export default function Scoreboard(): JSX.Element {
  const [events, setEvents] = useState<Event[]>([])
  const [playerOrder, setPlayers] = useState<Player[]>(['PLAYER_A', 'PLAYER_B'])

  function addEvent(event: Event) {
    setEvents([...events, event])
  }

  function pointScore(player: Player) {
    switch(player) {
      case 'PLAYER_A':
        return events.filter(e => e === 'INCREMENT_POINT_A').length
      case 'PLAYER_B':
        return events.filter(e => e === 'INCREMENT_POINT_B').length
    }
  }

  function gameScore(player: Player) {
    switch(player) {
      case 'PLAYER_A':
        return events.filter(e => e === 'INCREMENT_GAME_A').length
      case 'PLAYER_B':
        return events.filter(e => e === 'INCREMENT_GAME_B').length
    }
  }

  function incrementPoint(player: Player) {
    switch(player) {
      case 'PLAYER_A':
        addEvent('INCREMENT_POINT_A')
        break;
      case 'PLAYER_B':
        addEvent('INCREMENT_POINT_B')
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


  function incrementPointLeft() {
    incrementPoint(playerOrder[0])
  }

  function incrementPointRight() {
    incrementPoint(playerOrder[1])
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
    if (events.length === 0) return
    const eventsWithMostRecentRemoved = events.slice(0, events.length - 1)
    setEvents(eventsWithMostRecentRemoved)
  }

  function changeCourt() {
    setPlayers([playerOrder[1], playerOrder[0]])
  }

  return (
    <StyledScoreboard>
      <StyledGameScore onClick={incrementPointLeft}>
        {pointScore(playerOrder[0])}
      </StyledGameScore>

      <Middle>
        <SetScores>
          <StyledSetScore onClick={incrementGameLeft}>
            {gameScore(playerOrder[0])}
          </StyledSetScore>

          <Spacer />

          <StyledSetScore onClick={incrementGameRight}>
            {gameScore(playerOrder[1])}
          </StyledSetScore>
        </SetScores>

        <ResetButton onClick={resetScore}>reset</ResetButton>
        <UndoButton onClick={undo}>undo</UndoButton>
        <UndoButton onClick={changeCourt}>change court</UndoButton>
      </Middle>

      <StyledGameScore onClick={incrementPointRight}>
        {pointScore(playerOrder[1])}
      </StyledGameScore>
    </StyledScoreboard>
  )
}

const Spacer = styled.div`
  width: 16px;
`

const StyledScoreboard = styled.div`
  display: flex;
  justify-content: center;
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

const StyledGameScore = styled.div`
  width: 120px;
  height: 160px;
  font-size: 80px;
  ${scoreCommonStyles}
`

const StyledSetScore = styled.div`
  width: 60px;
  height: 100px;
  font-size: 50px;
  ${scoreCommonStyles}
`

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-right: 16px;
`

const SetScores = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const ResetButton = styled.button`
  height: 20px;
  border: none;
  border-radius: 8px;
  background: gray;
  color: white;
  cursor: pointer;
`

const UndoButton = styled.button`
  height: 20px;
  border: none;
  border-radius: 8px;
  background: gray;
  color: white;
  cursor: pointer;
  margin-top: 8px;
`
