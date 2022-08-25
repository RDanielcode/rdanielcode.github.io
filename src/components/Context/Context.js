import React, { useState } from 'react'

const Context = React.createContext()

const Provider = ({ children }) => {
  const [checked, setChecked] = useState(false)

  const hideAside = () => {
    setChecked(false)
  }

  const showAside = (e) => {
    const limitScroll = window.scrollY > 500
    if (limitScroll) setChecked(true)
    if (!limitScroll) setChecked(false)
  }
  return (
    <Context.Provider value={{ checked, setChecked, hideAside, showAside }}>
      {children}
    </Context.Provider>
  )
}

export { Provider, Context }
