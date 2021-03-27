import React, {useState} from 'react'
import styled from 'styled-components'

export default function Scoreboard(): JSX.Element {
  const [pointScoreA, setPointScoreA] = useState(0)
  const [pointScoreB, setPointScoreB] = useState(0)

  const [gameScoreA, setGameScoreA] = useState(0)
  const [gameScoreB, setGameScoreB] = useState(0)

  const incrementPointScore1A = () => {
    setPointScoreA(pointScoreA + 1)
  }

  const incrementPointScoreB = () => {
    setPointScoreB(pointScoreB + 1)
  }

  const incrementGameScoreA = () => {
    setGameScoreA(gameScoreA + 1)
  }

  const incrementGameScoreB = () => {
    setGameScoreB(gameScoreB + 1)
  }

  const resetScore = () => {
    setPointScoreA(0)
    setPointScoreB(0)
    setGameScoreA(0)
    setGameScoreB(0)
  }

  return (
    <StyledScoreboard>
      <StyledGameScore onClick={incrementPointScore1A}>
        {pointScoreA}
      </StyledGameScore>

      <Middle>
        <SetScores>
          <StyledSetScore onClick={incrementGameScoreA}>
            {gameScoreA}
          </StyledSetScore>

          <Spacer />

          <StyledSetScore onClick={incrementGameScoreB}>
            {gameScoreB}
          </StyledSetScore>
        </SetScores>

        <ResetButton onClick={resetScore}>reset</ResetButton>
      </Middle>

      <StyledGameScore onClick={incrementPointScoreB}>
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
