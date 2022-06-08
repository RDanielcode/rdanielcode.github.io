import React from 'react'
import { AsideInfo } from '../Aside'
import { ContactsInfo } from '../ContactsInfo'
import { MenuButton } from '../MenuButton'
import { PersonalInfo } from '../PersonalInfo'
import { ProjectsInfo } from '../ProjectsInfo'
import { Skills } from '../Skills'
import { Between, Between2 } from './styles'

const Home = () => {
  return (
    <div>
      <AsideInfo />
      <PersonalInfo />
      <Between />
      <ProjectsInfo />
      <Between2 />
      <Skills />
      <ContactsInfo />
      <MenuButton />
    </div>
  )
}

export { Home }
