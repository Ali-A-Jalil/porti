import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './skills.css';
import meter1 from '../../assest/img/meter1.svg';
import meter2 from '../../assest/img/meter2.svg';
import meter3 from '../../assest/img/meter3.svg';
import colorSharp from '../../assest/img/color-sharp.png';


const Skills = () => {

        const responsive = {
            superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
        };

    
    return (
        <section id="skills" className="skill">
            {/* <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Other Skills</h2>
                            <p> Here are some of my other skills</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="html" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src="https://img.icons8.com/color/96/000000/css3.png" alt="css" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="javascript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="react" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="bootstrap" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src="https://img.icons8.com/color/96/000000/python.png" alt="bootstrap" />
                                    <h5>Bootstrap</h5>
                                </div>

                            </Carousel>

                        </div>
                            
                    </Col>
                </Row>
            </Container> */}

            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx">
                            <h2>Skills</h2>
                            <p>Here are some of my skills</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="html" />
                                    <h5>React Js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="css" />
                                    <h5>Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="javascript" />
                                    <h5>Python</h5>
                                </div>
                            </Carousel>

                        </div>
                            
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} alt="background" />
        </section>
    )
    }

export default Skills