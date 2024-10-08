import React from 'react'
import { Col, Container, Row  } from 'react-bootstrap'
import './projects.css'
import { Nav } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import ProjectCard  from '../ProjectCard/ProjectCard'
import colorSharp2 from '../../assest/img/color-sharp2.png'
import projImg1 from '../../assest/img/project-img1.png'
import projImg2 from '../../assest/img/project-img2.png'
import projImg3 from '../../assest/img/project-img3.png'
const Projects = () => {

    const projects = [
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Business Start',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'Project 4',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Project 5',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Project 6',
            description: 'Design & Development',
            imgUrl: projImg3,
        },

    ]


        

return (
    <section id="projects" className='project'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Here are some of my projects</p>

                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" >
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project} />
                                )
                                
                                }
                            )
                            
                            }
                        </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project} />
                                    )
                                    
                                    }
                                )
                            }
                        </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project} />
                                        )
                                        
                                        }
                                    )
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>

                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt=""/>
    </section>
)
}

export default Projects