import React, {useState} from 'react'
import styled from 'styled-components'

type Event = 'INCREMENT_POINT_A' | 'INCREMENT_POINT_B' | 'INCREMENT_GAME_A' | 'INCREMENT_GAME_B'

export default function Scoreboard(): JSX.Element {
  const [events, setEvents] = useState<Event[]>([])

  const pointScoreA = events.filter(e => e === 'INCREMENT_POINT_A').length
  const pointScoreB = events.filter(e => e === 'INCREMENT_POINT_B').length

  const gameScoreA = events.filter(e => e === 'INCREMENT_GAME_A').length
  const gameScoreB = events.filter(e => e === 'INCREMENT_GAME_B').length

  function addEvent(event: Event) {
    setEvents([...events, event])
  }

  const incrementPointA = () => {
    addEvent('INCREMENT_POINT_A')
  }

  const incrementPointB = () => {
    addEvent('INCREMENT_POINT_B')
  }

  const incrementGameA = () => {
    addEvent('INCREMENT_GAME_A')
  }

  const incrementGameB = () => {
    addEvent('INCREMENT_GAME_B')
  }

  const resetScore = () => {
    setEvents([])
  }

  const undo = () => {
    const eventsWithMostRecentRemoved = events.slice(0, events.length - 1)
    setEvents(eventsWithMostRecentRemoved)
  }

  return (
    <StyledScoreboard>
      <StyledGameScore onClick={incrementPointA}>
        {pointScoreA}
      </StyledGameScore>

      <Middle>
        <SetScores>
          <StyledSetScore onClick={incrementGameA}>
            {gameScoreA}
          </StyledSetScore>

          <Spacer />

          <StyledSetScore onClick={incrementGameB}>
            {gameScoreB}
          </StyledSetScore>
        </SetScores>

        <ResetButton onClick={resetScore}>reset</ResetButton>
        <UndoButton onClick={undo}>undo</UndoButton>
      </Middle>

      <StyledGameScore onClick={incrementPointB}>
        {pointScoreB}
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
