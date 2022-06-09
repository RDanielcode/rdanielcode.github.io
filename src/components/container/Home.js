import React from 'react'
import { ContactsInfo } from '../ContactsInfo'
import { PersonalInfo } from '../PersonalInfo'
import { ProjectsInfo } from '../ProjectsInfo'
import { Skills } from '../Skills'
import { TopCo } from '../TopCo'

const Home = () => {
  return (
    <div>
      <TopCo />
      <PersonalInfo />
      <ProjectsInfo />
      <Skills />
      <ContactsInfo />
    </div>
  )
}

export { Home }
