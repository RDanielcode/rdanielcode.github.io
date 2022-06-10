import React from 'react'
import { Helmet } from 'react-helmet'

const LayoutHelmet = ({ children, title, subtitle, keyword }) => {
  return (
    <>
      <Helmet>
        {title && <title> {title} - Daniel's Portfolio </title>}
        {subtitle && <meta name='description' content={subtitle} />}
        {keyword && <meta name='keywords' content={keyword} />}
      </Helmet>
      {children}
    </>
  )
}

export { LayoutHelmet }
