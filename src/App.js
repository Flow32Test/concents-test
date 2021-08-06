import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import "./App.css"

const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.font};
  display: flex;
  font-family: 'SansPro', sans-serif;
  height: 100vh;
  justify-content: center;
  user-select: none;
  width: 100%;
`

const HeadlineWrapper = styled.div`
  border: ${props => props.theme.border} solid ${props => props.theme.font};
  cursor: pointer;
  padding: 50px;
`

const Headline = styled.h1`
  font-size: 7.5em;
  line-height: 1em;
  margin: 0;
  text-align: center;
`

const HeadlineBottomBorder = styled(Headline)`
  border-bottom: ${props => props.theme.border} solid ${props => props.theme.font};
  letter-spacing: 9px;
`

const defaultTheme = {
  background: "#fff",
  font: "#000",
  border: "25px"
}

const invertTheme = {
  font: "#fff",
  background: "#000",
  border: "25px"
}

const App = () => {
  const [isDefault, setIsDefault] = useState(true)

  const toggle = () => {
    setIsDefault(isDefault ? false : true)
  }

  return (
    <ThemeProvider theme={isDefault ? defaultTheme : invertTheme}>
      <Container>
        <HeadlineWrapper onClick={toggle}>
          <HeadlineBottomBorder>CNCTNS</HeadlineBottomBorder>
          <Headline>MNGMNT</Headline>
        </HeadlineWrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App
