import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { Aside, Div, Image, Name, Data } from './styles'

const AsideInfo = () => {
  const { hideAside, checked } = useContext(Context)

  return (
    <Aside onClick={hideAside} className={checked && 'active'}>
      <Div>
        <Image src='./assets/escritorio.jpg' />
      </Div>
      <Div>
        <Name>Daniel Reyes</Name>
        <Data>Chemical Engineer</Data>
        <Data>Frontend Developer|</Data>
        <Data>React| JavaScript| CSS3| HTML5</Data>
      </Div>
    </Aside>
  )
}

export { AsideInfo }
