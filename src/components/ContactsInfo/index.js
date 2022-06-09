import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { Button, CapitalLetter, Contact, Form, InputContent, InputTitle, Label, Social, Title } from './styles'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'

const ContactsInfo = () => {
  const { checked } = useContext(Context)
  return (
    <Form action='https://formsubmit.co/danielalejndro@gmail.com' method='POST' className={checked && 'inactive'} id='Contact'>
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
      <Social href='https://www.linkedin.com/in/daniel-reyes-88745471/'>
        <Contact><FaLinkedin color='#a1a110' /></Contact>
        <Contact><AiOutlineMail color='#a1a110' /></Contact>
        <Contact><BsPhone color='#a1a110' /></Contact>
      </Social>
    </Form>
  )
}

export { ContactsInfo }
