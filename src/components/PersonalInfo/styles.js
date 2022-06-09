import styled from 'styled-components'

export const Header = styled.header`
  margin: 0px;
  height: 250px;
  width: 100%;
  background-color: #1e1e1e;
  &.inactive{
    opacity: 0.3;
  }
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
  margin-top: 2px;
  text-align: justify;
  margin-right: 10px;
  z-index: 2;
`
export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Info = styled.div`
  width: 50%;
  position: relative
`
export const CapitalLetter = styled.span`
  position: absolute;
  font-size: 50px;
  top: -5px;
  right: 90%;
  color: #b7b7b7;
  font-weight: 920;
  opacity: 0.7;
  z-index: 1;
`
export const SecondTitle = styled.h4`
  margin: 25px 0 0 10px;
  color: #b7b7b7;
`
export const Icon = styled.div`

`
