import React from "react"
import styled from "styled-components"

const Container = styled.div`
  font-family: 'Kanit', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

const Headline = styled.h1`
  font-size: 7.5em;
  letter-spacing: 15px;
  text-align: center;
`

function App() {
  return (
    <Container>
      <Headline>CONCENTS</Headline>
    </Container>
  )
}

export default App
