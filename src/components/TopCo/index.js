import React from 'react'
import { Anchor, Article, Button, Container, InfoNames, ItemList, List, Name, Nav, Photo, Tech } from './styles'

const TopCo = () => {
  return (
    <Article id='Principal'>
      <Nav>
        <List>
          <Anchor href='#Personal'>
            <ItemList>About</ItemList>
          </Anchor>
          <Anchor href='#Work'>
            <ItemList>My work</ItemList>
          </Anchor>
          <Anchor href='#Skills'>
            <ItemList>Skills</ItemList>
          </Anchor>
          <Anchor href='#Contact'>
            <ItemList>Contact</ItemList>
          </Anchor>
        </List>
      </Nav>
      <Container>
        <InfoNames>
          <div>
            <Name>Hi, i am Daniel</Name>
            <Tech>I'M A DEVELOPER</Tech>
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
