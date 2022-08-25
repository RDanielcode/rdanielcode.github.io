import React, { useContext, useEffect } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { Context } from '../Context/Context'
import { Anchor } from './styles'

const MenuButton = () => {
  const { showAside, checked } = useContext(Context)

  useEffect(() => {
    window.addEventListener('scroll', showAside)
    return () => document.removeEventListener('scroll', showAside)
  }, [showAside])

  return (
    <Anchor href='#Principal' showButton={showAside} className={checked && 'active'}>
      <BsArrowLeftCircleFill color='#a1a110' size='20px' />
    </Anchor>
  )
}

export { MenuButton }
