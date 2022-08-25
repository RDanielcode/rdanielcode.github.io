import React from 'react'
import { Header, Text, Info, HeaderInfo, CapitalLetter, SecondTitle } from './styles'
import { VscCode } from 'react-icons/vsc'

const PersonalInfo = () => {
  return (
    <Header id='Personal'>
      <HeaderInfo>
        <div>
          <VscCode size='80px' color='#a1a110' />
        </div>
        {/* <Photo src='../../assets/escritorio.png' /> */}
        <Info>
          <SecondTitle><CapitalLetter>A</CapitalLetter>bout me</SecondTitle>
          <Text>
            Chemical Engineer and Frontend Developer dedicated to learn everyday and face   challenges on any moment. My career can be described from two points of view.<br /><br />

            i'm totally dedicated to the Software Area for more than a year, developing my own projects, open to new opportunities, learning and practicing everything about Frontend. I have skills on React.js, JavaScript, CSS, Git and Github, Webpack , TypeScript and HTML.<br /><br />

            On the other hand i'm a Chemical Engineer with 7 years of experience in the food and beverage industry, where i developed a lot of personal and professional aspects. My last roles/duties, i was in charge of teams of different areas such as Brewhouse and Fermentation.
          </Text>
        </Info>
      </HeaderInfo>
    </Header>
  )
}

export { PersonalInfo }
