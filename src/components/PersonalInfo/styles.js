import styled from 'styled-components'

export const Header = styled.header`
  margin: 0px;
  height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #1e1e1e;
  &.inactive{
    opacity: 0.3;
  }
`
export const Photo = styled.img`
  width: 150px;
  top: 5px;
  left: 15px;
`

export const Title = styled.h2`
  margin: 0px;
  text-align: center;
  color: #b7b7b7;
`
export const Text = styled.p`
  font-size: 8px;
  color: #b7b7b7;
  text-align: justify;
  z-index: 2;
  @media (min-width: 500px){
    font-size: 12px;
  }
  @media (min-width: 900px){
    font-size: 16px;
  }
`
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Info = styled.div`
  width: 50%;
  @media (min-width: 500px){
    width: 75%;
  }
`
export const CapitalLetter = styled.span`
  font-size: 50px;
  color: #b7b7b7;
  font-weight: 920;
  opacity: 0.7;
  z-index: 1;
`
export const SecondTitle = styled.h4`
  margin: 0 0 0 10px;
  color: #b7b7b7;
`
