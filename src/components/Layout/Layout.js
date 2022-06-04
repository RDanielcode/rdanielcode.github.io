import React from 'react'
import { Footer } from '../Footer'

const Layout = ({ children }) => {
  return (
    <section>
      {children}
      <Footer />
    </section>
  )
}

export { Layout }
