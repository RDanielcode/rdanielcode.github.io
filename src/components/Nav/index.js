import React, { useEffect, useContext } from 'react'
import { Context } from '../Context/Context'
import { Nav, Anchor, ItemList, List } from './styles'

const NavBar = () => {
  const { markSection, section } = useContext(Context)

  useEffect(() => {
    window.addEventListener('scroll', markSection)
    console.log(section)
    return () => document.removeEventListener('scroll', markSection)
  }, [markSection])

  return (
    <Nav>
      <List>
        <Anchor href='#Personal'>
          <ItemList className={section === 1 && 'mark'}>About</ItemList>
        </Anchor>
        <Anchor href='#Work'>
          <ItemList className={section === 2 && 'mark'}>My work</ItemList>
        </Anchor>
        <Anchor href='#Skills'>
          <ItemList className={section === 3 && 'mark'}>Skills</ItemList>
        </Anchor>
        <Anchor href='#Contact'>
          <ItemList className={section === 4 && 'mark'}>Contact</ItemList>
        </Anchor>
      </List>
    </Nav>
  )
}

export { NavBar }
