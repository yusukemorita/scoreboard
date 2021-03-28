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
      <StyledPointScore onClick={incrementPointLeft}>
        {pointScore(playerOrder[0])}
      </StyledPointScore>

      <Middle>
        <SetScores>
          <StyledGameScore onClick={incrementGameLeft}>
            {gameScore(playerOrder[0])}
          </StyledGameScore>

          <Spacer />

          <StyledGameScore onClick={incrementGameRight}>
            {gameScore(playerOrder[1])}
          </StyledGameScore>
        </SetScores>

        <Button onClick={resetScore}>reset</Button>
        <Button onClick={undo}>undo</Button>
        <Button onClick={changeCourt}>change court</Button>
      </Middle>

      <StyledPointScore onClick={incrementPointRight}>
        {pointScore(playerOrder[1])}
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

const Button = styled.button`
  height: 4vmin;
  font-size: 3vmin;
  border: none;
  border-radius: 8px;
  background: gray;
  color: white;
  cursor: pointer;
  margin-top: 5%;
`
