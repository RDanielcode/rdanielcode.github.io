import React from 'react'
import { Home } from './container/Home'
import { Detail } from './container/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import { GlobalStyle } from '../styles/GlobalStyle'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
