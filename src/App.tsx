import React from 'react'
import Scoreboard from './components/scoreboard'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Title>Scoreboard</Title>

      <Scoreboard />
    </div>
  );
}

const Title = styled.h1`
  width: 100%;
  text-align: center;
`

export default App;
