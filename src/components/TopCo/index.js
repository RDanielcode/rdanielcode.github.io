import React from 'react'
import { NavBar } from '../Nav'
import { Article, Button, Container, InfoNames, Name, Photo, Tech } from './styles'

const TopCo = () => {
  return (
    <Article id='Principal'>
      <NavBar />
      <Container>
        <InfoNames>
          <div>
            <Name>HI, <br />I'M DANIEL</Name>
            <Tech>WEB DEVELOPER</Tech>
            <a href='../../assets/JrFrontend_Daniel_Reyes.pdf' download>
              <Button>Download CV</Button>
            </a>
          </div>
        </InfoNames>
        <Photo src='../../assets/escritorio.png' alt='Profile' />
      </Container>
    </Article>
  )
}

export { TopCo }
