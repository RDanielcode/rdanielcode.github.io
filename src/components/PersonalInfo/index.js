import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { Header } from './styles'

const PersonalInfo = () => {
  const { checked } = useContext(Context)
  return (
    <Header className={checked && 'inactive'}>
      <h2>Intro</h2>
    </Header>
  )
}

export { PersonalInfo }
