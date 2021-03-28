import React from 'react'
import Scoreboard from './components/scoreboard'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Container>
        <Title>Scoreboard</Title>
        <Scoreboard />
      </Container>
    </div>
  );
}

const ratio = 16 / 9

// ref: https://stackoverflow.com/questions/20590239/maintain-aspect-ratio-of-div-but-fill-screen-width-and-height-in-css/36295495#20593342
const Container = styled.div`
  width: 100vw;
  height: ${100 / ratio}vw;
  // background: pink; /* useful for css debugging */
  max-height: 100vh;
  max-width: ${100 * ratio}vh;
  margin: auto;
  position: absolute;

  /* vertical center */
  top: 0;
  bottom: 0;

  /* horizontal center */
  left: 0;
  right: 0;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 10vmin;
  font-weight: bold;
`

export default App;
