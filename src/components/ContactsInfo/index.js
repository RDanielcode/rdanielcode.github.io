import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { Form, InputContent, InputTitle } from './styles'

const ContactsInfo = () => {
  const { checked } = useContext(Context)
  return (
    <Form action='mailto:danielalejndro@gmail.com' className={checked && 'inactive'}>
      <h2>Contact</h2>
      <InputTitle type='text' placeholder='title' />
      <InputContent type='text' placeholder='content' />
      <button type='submit'>Send</button>
      <p>Linkedin</p>
      <p>Phone Number: +58 412-4701857</p>
    </Form>
  )
}

export { ContactsInfo }
