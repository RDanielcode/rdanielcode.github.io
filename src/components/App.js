import React from 'react'
import { Home } from './container/Home'
import { Detail } from './container/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout/Layout'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
