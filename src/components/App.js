import React from 'react'
import { AsideInfo } from './Aside'
import { ContactsInfo } from './ContactsInfo'
// import { Context } from './Context/Context'
import { MenuButton } from './MenuButton'
import { PersonalInfo } from './PersonalInfo'
import { ProjectsInfo } from './ProjectsInfo'
import { GlobalStyle } from '../styles/GlobalStyle'

export const App = () => {
  return (
    <section>
      <GlobalStyle />
      <AsideInfo />
      <PersonalInfo />
      <ProjectsInfo />
      <ContactsInfo />
      <MenuButton />
    </section>
  )
}
