import React, {useState} from 'react'
import styled from 'styled-components'

export default function Scoreboard(): JSX.Element {
  const [gameScore1, setGameScore1] = useState(0)
  const [gameScore2, setGameScore2] = useState(0)

  const [setScore1, setSetScore1] = useState(0)
  const [setScore2, setSetScore2] = useState(0)

  const incrementGameScore1 = () => {
    setGameScore1(gameScore1 + 1)
  }

  const incrementGameScore2 = () => {
    setGameScore2(gameScore2 + 1)
  }

  const incrementSetScore1 = () => {
    setSetScore1(setScore1 + 1)
  }

  const incrementSetScore2 = () => {
    setSetScore2(setScore2 + 1)
  }

  const resetScore = () => {
    setGameScore1(0)
    setGameScore2(0)
    setSetScore1(0)
    setSetScore2(0)
  }

  return (
    <StyledScoreboard>
      <StyledGameScore onClick={incrementGameScore1}>
        {gameScore1}
      </StyledGameScore>

      <Middle>
        <SetScores>
          <StyledSetScore onClick={incrementSetScore1}>
            {setScore1}
          </StyledSetScore>

          <Spacer />

          <StyledSetScore onClick={incrementSetScore2}>
            {setScore2}
          </StyledSetScore>
        </SetScores>

        <ResetButton onClick={resetScore}>reset</ResetButton>
      </Middle>

      <StyledGameScore onClick={incrementGameScore2}>
        {gameScore2}
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
