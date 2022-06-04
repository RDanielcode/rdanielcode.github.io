import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { Contact, Form, InputContent, InputTitle, Label, Social } from './styles'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { FcPhoneAndroid } from 'react-icons/fc'

const ContactsInfo = () => {
  const { checked } = useContext(Context)
  return (
    <Form action='https://formsubmit.co/danielalejndro@gmail.com' method='POST' className={checked && 'inactive'}>
      <h2>Contact</h2>

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

      <button type='submit'>Send</button>
      <Social href='https://www.linkedin.com/in/daniel-reyes-88745471/'>
        <Contact><FaLinkedin />Linkedin</Contact>
      </Social>
      <Contact><AiOutlineMail />danielalejndro@gmail.com</Contact>
      <Contact><FcPhoneAndroid />Phone Number: +58 412-4701857</Contact>
    </Form>
  )
}

export { ContactsInfo }
