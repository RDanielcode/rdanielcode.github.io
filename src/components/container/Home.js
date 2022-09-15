import React from 'react'

import { ContactsInfo } from '../ContactsInfo'
import { LayoutHelmet } from '../Layout/LayoutHelmet'
import { MenuButton } from '../MenuButton'
import { PersonalInfo } from '../PersonalInfo'
import { ProjectsInfo } from '../ProjectsInfo'
import { Skills } from '../Skills'
import { TopCo } from '../TopCo'

const Home = () => {
  return (
    <div>
      <LayoutHelmet title='Home' subtitle='Here is a preview of my tech profile' keywords='Portfolio'>
        <TopCo />
        <PersonalInfo />
        <ProjectsInfo />
        <Skills />
        <ContactsInfo />
        <MenuButton />
      </LayoutHelmet>
    </div>
  )
}

export { Home }
