import React from 'react'
import { Button, Container, Image, Title, Description, ProjectButton } from './styles'

const Modal = ({ src, title, description, onClick, link }) => {
  return (
    <Container>
      <Image src={src} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <a href={link}>
        <ProjectButton>Go to project</ProjectButton>
      </a>
      <Button onClick={onClick}>X</Button>
    </Container>
  )
}

export { Modal }
