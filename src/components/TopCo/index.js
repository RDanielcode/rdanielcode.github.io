import React from 'react'
import { Anchor, Article, Button, Container, InfoNames, ItemList, List, Name, Nav, Photo, Tech } from './styles'

const TopCo = () => {
  return (
    <Article>
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
          <Name>Hi, i am Daniel</Name>
          <Tech>I'M A DEVELOPER</Tech>
          <a href='../../assets/petgram.jpg' download>
            <Button>Download CV</Button>
          </a>
        </InfoNames>
        <Photo src='../../assets/1654725347226.png' />
      </Container>
    </Article>
  )
}

export { TopCo }
