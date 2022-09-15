import React from 'react'
import { useLocation } from 'react-router-dom'
import { BsHouse, BsFillHouseFill, BsFolder, BsFillFolderFill } from 'react-icons/bs'
import { FooterDiv, Link } from './styles'

const Footer = () => {
  const location = useLocation()
  const size = '24px'
  const color = '#a1a110'

  return (
    <FooterDiv>
      {location.pathname === '/' &&
        <>
          <Link to='/'>
            <BsFillHouseFill size={size} color={color} />
          </Link>
          <Link to='/detail'>
            <BsFolder size={size} color={color} />
          </Link>
        </>}
      {location.pathname === '/detail' &&
        <>
          <Link to='/'>
            <BsHouse size={size} color={color} />
          </Link>
          <Link to='/detail'>
            <BsFillFolderFill size={size} color={color} />
          </Link>
        </>}
    </FooterDiv>
  )
}

export { Footer }
