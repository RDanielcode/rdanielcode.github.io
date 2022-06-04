import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { useLocation } from 'react-router-dom'
import { BsHouse, BsFillHouseFill, BsFolder, BsFillFolderFill } from 'react-icons/bs'
import { FooterDiv, Link } from './styles'

const Footer = () => {
  const { showAside, hideAside } = useContext(Context)
  const location = useLocation()
  const size = '24px'
  const color = 'rgb(0,0,0)'

  return (
    <FooterDiv>
      {location.pathname === '/' &&
        <>
          <Link to='/'>
            <BsFillHouseFill size={size} color={color} onClick={hideAside} />
          </Link>
          <Link to='/detail'>
            <BsFolder size={size} color={color} onClick={showAside} />
          </Link>
        </>}
      {location.pathname === '/detail' &&
        <>
          <Link to='/'>
            <BsHouse size={size} color={color} onClick={hideAside} />
          </Link>
          <Link to='/detail'>
            <BsFillFolderFill size={size} color={color} onClick={showAside} />
          </Link>
        </>}
    </FooterDiv>
  )
}

export { Footer }
