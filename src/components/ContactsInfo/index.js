import React from 'react'
import { Button, CapitalLetter, Contact, Form, InputContent, InputTitle, Label, Social, Title } from './styles'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'

const ContactsInfo = () => {
  const size = '28px'
  return (
    <Form action='https://formsubmit.co/danielalejndro@gmail.com' method='POST' id='Contact'>
      <Title><CapitalLetter>C</CapitalLetter>ontact </Title>

      <Label htmlFor='name'>Name</Label>
      <InputTitle type='text' placeholder='title' name='name' />

      <Label htmlFor='email'>Email</Label>
      <InputTitle type='text' placeholder='title' name='email' />

      <Label htmlFor='about'>About</Label>
      <InputTitle type='text' placeholder='title' name='about' />

      <Label htmlFor='comments'>Comments</Label>
      <InputContent cols='15' rows='5' placeholder='content' name='comments' />

      <input type='hidden' name='_next' value='http://localhost:3006' />
      <input type='hidden' name='_captcha' value='false' />

      <Button type='submit'>Send</Button>
      <Social>
        <Contact href='https://www.linkedin.com/in/daniel-reyes-88745471/'><FaLinkedin size={size} color='#a1a110' /></Contact>
        <Contact href='mailto:danielalejndro@gmail.com'><AiOutlineMail size={size} color='#a1a110' /></Contact>
        <Contact href='https://wa.me/584124701857'><BsPhone size={size} color='#a1a110' /></Contact>
        <Contact href='https://github.com/RDanielcode'><AiFillGithub size={size} color='#a1a110' /></Contact>
      </Social>
    </Form>
  )
}

export { ContactsInfo }
