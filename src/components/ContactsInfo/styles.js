import styled from 'styled-components'

export const Form = styled.form`
  height: 400px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 40px;
  &.inactive{
    opacity: 0.3;
  }
`

export const InputTitle = styled.input`
  width: 100%;
  max-width: 500px;
  height: 30px;
  margin: 5px 0;
`

export const InputContent = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 330px;
  margin: 5px 0;

`

export const Label = styled.label`
  font-size: 14px;
`

export const Contact = styled.p`
  margin: 3px;
  display: flex;
  align-items: center;
`

export const Social = styled.a`
  color: rgb(0,0,0);
  text-decoration: none;
`
