import React, { Component } from 'react'
import { Carousel, Row, Col, Container } from 'react-bootstrap'
import {Animated} from "react-animated-css";



class Slider extends Component{
    
    render(){
        return(
            <div>
            <Carousel className="carou">
                <Carousel.Item className="carouItem">

                    <Animated animationIn="slideInLeft" animationInDuration="2000">
                        <svg className="slideOverlay" viewBox="0 0 720 405">
                            <path className="slideOverlay-fill1" d="M0,0 250,0 700,405 0,405"  />
                        </svg>
                    </Animated>

                    <Container>
                        <Animated animationIn="zoomInDown" animationInDuration="3000">
                            <Row className="" >
                                <Col md={6} className="text-center">
                                    <div class="slide__text">
                                        <h2 class="slide__text-heading">Project Name 1</h2>
                                        <p class="slide__text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo 
                                        debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing 
                                        elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.</p>
                                    </div> 
                                </Col>
                            </Row>
                        </Animated>
                    </Container>
                    
                    

                    <img
                        className="d-block w-100"
                        src="img/4.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <Animated animationIn="slideInLeft" animationInDuration="2000">
                    <h3>First slide label</h3>
                    </Animated>

                    
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                

                <Carousel.Item className="carouItem">
                    <Animated animationIn="slideInLeft" animationInDuration="2000">
                        <svg className="slideOverlay" viewBox="0 0 720 405">
                            <path className="slideOverlay-fill2" d="M0,0 250,0 700,405 0,405"  />
                        </svg>
                    </Animated>

                    <Container>
                        <Animated animationIn="zoomInDown" animationInDuration="3000">
                            <Row className="" >
                                <Col md={6} className="text-center">
                                        <div class="slide__text">
                                            <h2 class="slide__text-heading">Project Name 2</h2>
                                            <p class="slide__text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo 
                                            debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing 
                                            elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.</p>
                                        </div>
                                </Col>
                            </Row>
                        </Animated>
                    </Container>

                    <img
                        className="d-block w-100"
                        src="img/3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Animated animationIn="slideInLeft" animationInDuration="3000">
                            <h3>Second slide label</h3>
                        </Animated>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item className="carouItem">
                    <Animated animationIn="slideInLeft" animationInDuration="3000">
                        <svg className="slideOverlay" viewBox="0 0 720 405">
                            <path className="slideOverlay-fill3" d="M0,0 250,0 700,405 0,405"  />
                        </svg>
                    </Animated>


                    <Container>
                        <Animated animationIn="zoomInDown" animationInDuration="3000">
                            <Row className="" >
                                <Col md={6} className="text-center">
                                        <div class="slide__text">
                                            <h2 class="slide__text-heading">Project Name 3</h2>
                                            <p class="slide__text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo 
                                            debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing 
                                            elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.</p>
                                        </div>
                                </Col>
                            </Row>
                        </Animated>
                    </Container>

                    
                    <img
                        className="d-block w-100"
                        src="img/2.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Animated animationIn="slideInLeft" animationInDuration="3000">
                    <h3>Third slide label</h3>                    
                    </Animated>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item className="carouItem">
                    <Animated animationIn="slideInLeft" animationInDuration="3000">
                        <svg className="slideOverlay" viewBox="0 0 720 405">
                            <path className="slideOverlay-fill4" d="M0,0 250,0 700,405 0,405"  />
                        </svg>
                    </Animated>


                    <Container>
                        <Animated animationIn="zoomInDown" animationInDuration="3000">
                            <Row className="" >
                                <Col md={6} className="text-center">
                                        <div class="slide__text">
                                            <h2 class="slide__text-heading">Project Name 4</h2>
                                            <p class="slide__text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo 
                                            debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing 
                                            elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.</p>
                                        </div>
                                </Col>
                            </Row>
                        </Animated>
                    </Container>


                    <img
                        className="d-block w-100"
                        src="img/5.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Animated animationIn="slideInLeft" animationInDuration="3000">
                    <h3>Third slide label</h3>                    
                    </Animated>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            
            </div>
        );
    }
}

export default Slider;