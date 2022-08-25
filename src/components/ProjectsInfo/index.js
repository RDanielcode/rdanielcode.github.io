import React, { useState } from 'react'
import { Modal } from '../../Modal'
import ProjectInfo from '../../ProjectInfo'
import { Container, Image, Card, ProjectContainer, CapitalLetter, More, SecondTitle } from './styles'
import { Link } from 'react-router-dom'

const ProjectsInfo = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const [info, setInfo] = useState(ProjectInfo)
  const { projects } = info
  console.log(setInfo)

  return (
    <ProjectContainer id='Work'>
      <SecondTitle>My <CapitalLetter>W</CapitalLetter>ork</SecondTitle>
      <Container>
        {
          projects.map(project =>
            <Card key={project.id}>
              <Image
                src={project.src}
                alt={project.alt}
                onClick={() => dispatch({ type: project.number })}
              />
              {/* <h3>{project.title}</h3> */}
              {state[project.number] &&
                <Modal
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  onClick={() => dispatch({ type: 'FALSE' })}
                  link={project.link}
                />}
            </Card>
          )
        }
      </Container>
      <Link style={{ textDecoration: 'none' }} to='/detail'>
        <More>More projects...</More>
      </Link>
    </ProjectContainer>
  )
}

const initialState = {
  ONE: false,
  TWO: false,
  THREE: false,
  FOUR: false
}

const reducerObj = (state) => ({
  // eslint-disable-next-line quote-props
  'ONE': {
    ...state,
    ONE: true
  },

  // eslint-disable-next-line quote-props
  'TWO': {
    ...state,
    TWO: true
  },

  // eslint-disable-next-line quote-props
  'THREE': {
    ...state,
    THREE: true
  },

  // eslint-disable-next-line quote-props
  'FOUR': {
    ...state,
    FOUR: true
  },

  // eslint-disable-next-line quote-props
  'FALSE': {
    ...initialState

  }
})

const reducer = (state, action) => {
  return reducerObj(state)?.[action.type] ?? state
}

export { ProjectsInfo }
