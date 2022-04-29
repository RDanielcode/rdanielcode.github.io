import React, { useContext } from 'react'
import { BiAlignLeft } from 'react-icons/bi'
import { Context } from '../Context/Context'
import { Button } from './styles'

const MenuButton = () => {
  const { showAside } = useContext(Context)

  return (
    <Button onClick={showAside}>
      <BiAlignLeft />
    </Button>
  )
}

export { MenuButton }
