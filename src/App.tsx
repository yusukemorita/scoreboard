import React from 'react'
import './App.css'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <h1>Scoreboard</h1>

      <StyledScoreboard>
        <StyledGameScore>
          11
        </StyledGameScore>

        <Spacer />

        <StyledSetScore>1</StyledSetScore>

        <Spacer />

        <StyledSetScore>3</StyledSetScore>

        <Spacer />

        <StyledGameScore>
          8
        </StyledGameScore>
      </StyledScoreboard>
    </div>
  );
}

export default App;

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
