import React, { useState } from 'react'
import ProjectListInfo from '../../ProjectListInfo'
import { Anchor, Article, Description, Info, Section, Tech, Type } from './styles'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

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
              <Description>{project.description}</Description>
              <Anchor href={project.link}>Go ..<BsFillArrowRightCircleFill color='#a1a110' /></Anchor>
            </Info>
            <Tech><Type style={{ border: `10px solid ${project.color}` }} /> {project.type}</Tech>
          </Article>
        )
      }
    </Section>
  )
}

export { ProjectList }
