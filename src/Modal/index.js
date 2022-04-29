import React from 'react'
import { Button, Container, Image } from './styles'

const Modal = ({ src, title, description, onClick }) => {
  return (
    <Container>
      <Image src={src} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button onClick={onClick}>X</Button>
    </Container>
  )
}

export { Modal }
