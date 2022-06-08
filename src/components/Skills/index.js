import React from 'react'
import { SiJavascript, SiReact, SiTypescript, SiHtml5, SiCss3, SiSass, SiWebpack, SiGithub } from 'react-icons/si'
import { Article, CapitalLetter, Container, SecondTitle } from './styles'

const Skills = () => {
  const size = '32px'
  return (
    <Article>
      <SecondTitle><CapitalLetter>S</CapitalLetter>kills</SecondTitle>
      <Container>
        <SiJavascript size={size} color='#f7df1e' />
        <SiReact size={size} color='#6bd4f3' />
        <SiTypescript size={size} color='#2f74c0' />
      </Container>
      <Container>
        <SiHtml5 size={size} color='#dd4b25' />
        <SiCss3 size={size} color='#2173f7' />
        <SiSass size={size} color='#c76494' />
        <SiWebpack size={size} color='#a1bde6' />
        <SiGithub size={size} />
      </Container>
    </Article>
  )
}

export { Skills }
