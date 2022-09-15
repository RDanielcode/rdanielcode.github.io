import React, { useState } from 'react'

const Context = React.createContext()

const Provider = ({ children }) => {
  const [checked, setChecked] = useState(false)
  const [section, setSection] = useState(0)
  // const pages = ['Personal', 'Work', 'Skills', 'Contact']

  // const setActive = (id) => {
  //   const url = window.location.href
  //   pages.forEach((id) => {
  //     if (url.indexOf(id) !== 1) {
  //       const element = document.getElementById(id)
  //       element.classList.add('active')
  //     }
  //   })
  // }

  const hideAside = () => {
    setChecked(false)
  }

  const showAside = (e) => {
    const limitScroll = window.scrollY > 500
    if (limitScroll) setChecked(true)
    if (!limitScroll) setChecked(false)
  }

  const markSection = (e) => {
    const limitScroll = window.scrollY < 500
    const limitScroll1 = window.scrollY > 500 && window.scrollY < 1000
    const limitScroll2 = window.scrollY > 1000 && window.scrollY < 1800
    const limitScroll3 = window.scrollY > 1800 && window.scrollY < 2400
    const limitScroll4 = window.scrollY > 2400

    if (limitScroll) {
      setSection(0)
    }

    if (limitScroll1) {
      setSection(1)
    }

    if (limitScroll2) {
      setSection(2)
    }

    if (limitScroll3) {
      setSection(3)
    }

    if (limitScroll4) {
      setSection(4)
    }
  }

  return (
    <Context.Provider value={{ checked, setChecked, hideAside, showAside, markSection, section }}>
      {children}
    </Context.Provider>
  )
}

export { Provider, Context }
