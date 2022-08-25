import React from 'react'
import { SiJavascript, SiReact, SiTypescript, SiHtml5, SiCss3, SiSass, SiWebpack, SiGithub } from 'react-icons/si'
import { Article, CapitalLetter, Container, SecondTitle } from './styles'

const Skills = () => {
  const size = '50px'
  const space = '20px'
  return (
    <Article id='Skills'>
      <SecondTitle><CapitalLetter>S</CapitalLetter>kills</SecondTitle>
      <Container>
        <SiJavascript size={size} color='#f7df1e' style={{ margin: `${space}` }} />
        <SiReact size={size} color='#6bd4f3' style={{ margin: `${space}` }} />
        <SiTypescript size={size} color='#2f74c0' style={{ margin: `${space}` }} />
      </Container>
      <Container>
        <SiHtml5 size={size} color='#dd4b25' style={{ margin: `${space}` }} />
        <SiCss3 size={size} color='#2173f7' style={{ margin: `${space}` }} />
        <SiSass size={size} color='#c76494' style={{ margin: `${space}` }} />
        <SiWebpack size={size} color='#a1bde6' style={{ margin: `${space}` }} />
        <SiGithub size={size} style={{ margin: `${space}` }} />
      </Container>
    </Article>
  )
}

export { Skills }
