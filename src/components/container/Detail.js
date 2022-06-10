import React from 'react'
import { LayoutHelmet } from '../Layout/LayoutHelmet'
import { ProjectList } from '../ProjectList'

const Detail = () => {
  return (
    <>
      <LayoutHelmet title='Project list' subtitle='List of projects i have developed' keywords='React'>
        <ProjectList />
      </LayoutHelmet>
    </>
  )
}

export { Detail }
