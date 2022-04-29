import styled from 'styled-components'

export const Aside = styled.aside`
height: 100vh;
width: 175px;
position: fixed;
left: -1300px;
background-color: #222629;
z-index: 2;
transition-duration: 2s;
transform: translateX(-1300px);
&.active{
  transform: translateX(1300px);
  transition-duration: 1s;
}
`

export const Div = styled.div`
display: block;
`

export const Image = styled.img`
margin: 10px;
height: 100px;
width: 90%;
object-fit: contain;
`

export const Name = styled.h4`
color: #fff;
font-size: 16px;
`

export const Data = styled.p`
color: #5f6365;
font-size: 12px;
`
