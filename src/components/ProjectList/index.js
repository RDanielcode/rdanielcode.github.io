import React, { useState } from 'react'
import ProjectListInfo from '../../ProjectListInfo'
import { Article, Info, Section, Tech, Type } from './styles'

const ProjectList = () => {
  const [state, setState] = useState(ProjectListInfo)
  const { projects } = state
  console.log(setState)

  return (
    <Section>
      {
        projects.map(project =>
          <Article key={project.id}>
            <Info>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link}>Go to the project...</a>
            </Info>
            <Tech><Type style={{ border: `10px solid ${project.color}` }} /> {project.type}</Tech>
          </Article>
        )
      }
    </Section>
  )
}

export { ProjectList }
