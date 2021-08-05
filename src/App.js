import React from "react"
import styled from "styled-components"

import "./App.css"

const Container = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  font-family: 'SansPro', sans-serif;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

const HeadlineWrapper = styled.div`
  padding: 50px;
  border: 15px solid #000;
`

const Headline = styled.h1`
  font-size: 7.5em;
  margin: 0;
  text-align: center;
`

const HeadlineBottomBorder = styled(Headline)`
  border-bottom: 15px solid #000;
  letter-spacing: 9px;
`

function App() {
  return (
    <Container>
      <HeadlineWrapper>
        <HeadlineBottomBorder>CNCTNS</HeadlineBottomBorder>
        <Headline>MNGMNT</Headline>
      </HeadlineWrapper>
    </Container>
  )
}

export default App
