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

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 8vw;
  line-height: 7vw;
  font-weight: bold;
  margin-bottom: 1vw;
`

export default App;
