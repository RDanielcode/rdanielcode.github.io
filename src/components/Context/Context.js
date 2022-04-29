import React, { useState } from 'react'

const Context = React.createContext()

const Provider = ({ children }) => {
  const [checked, setChecked] = useState(false)

  const hideAside = () => {
    setChecked(false)
  }

  const showAside = () => {
    setChecked(true)
  }
  return (
    <Context.Provider value={{ checked, setChecked, hideAside, showAside }}>
      {children}
    </Context.Provider>
  )
}

export { Provider, Context }
