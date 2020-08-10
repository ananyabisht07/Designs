import React, { Component } from 'react'
import { Carousel, Row, Col, Container, } from 'react-bootstrap'
import {Animated} from "react-animated-css";



class Slider extends Component{
    
    render(){
        return(
            <div>
            <Carousel className="carou">
            <Carousel.Item className="carouItem">

                    <Animated animationIn="slideInLeft" animationInDuration="2000">
                        <svg className="slideOverlay" viewBox="0 0 720 405">
                            <path className="slideOverlay-fill5" d="M0,0 250,0 700,405 0,405"  />
                        </svg>
                    </Animated>

                    <Container>
                        <Animated animationIn="fadeInUp" animationInDuration="5000">
                            <Row className="" >
                                <Col md={6} className="text-center">
                                    <div className="slide__text1">
                                        
                                        <h1 className="slide__text-heading">WELCOME</h1>
                                        <img className="welcome-img" src="img/welcome.png" alt="slide-img" />
                                        
                                    </div> 
                                    
                                </Col>
                            </Row>
                        </Animated>
                    </Container>
                    <img
                        className="d-block w-100"
                        src="img/12.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Animated animationIn="slideInLeft" animationInDuration="2000">
                        
                        </Animated>
                    
                        <p style={{fontSize:"20px", fontWeight:"500" }}><a href="#scroll">Slide Down<i class="fa fa-angle-down fa-lg"></i> </a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                

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
                                    <div className="slide__text">
                                        <h2 className="slide__text-heading">WE WELCOME YOU</h2>
                                        <p className="slide__text-desc">Our home located in New York's Flatiron District, where
                                        we invite guests to celebrate life and share sundry blends of modern and traditional
                                        Lebanese-Mediterranean cuisine.Our goal at ilili is to unify our guest's cultures and
                                        spirits with our own, expressing passion and generosity in the cuisine we share.</p>
                                    </div> 
                                </Col>
                            </Row>
                        </Animated>
                    </Container>
                    <img
                        className="d-block w-100"
                        src="img/6.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Animated animationIn="slideInLeft" animationInDuration="2000">
                        <h3>First slide label</h3>
                        </Animated>
                        <p style={{fontSize:"20px", fontWeight:"500" }}>Slide Down <i class="fa fa-angle-down fa-lg"></i></p>
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
                                        <div className="slide__text">
                                            <h2 className="slide__text-heading">FRESH TAKES ON OLD STANDARDS</h2>
                                            <p className="slide__text-desc">Executive Chef and Owner Plilippe Massoud excellently
                                            crafts a melting pot of Lebanese, Levatine, and Mediterranean inspired cuisine mixed
                                            with New York Attitude. Flavorful herbs and spices combine textures to appease broad
                                            based palates.</p>
                                        </div>
                                </Col>
                            </Row>
                        </Animated>
                    </Container>

                    <img
                        className="d-block w-100"
                        src="img/11.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Animated animationIn="slideInLeft" animationInDuration="3000">
                            <h3>Second slide label</h3>
                        </Animated>
                        <p style={{fontSize:"20px", fontWeight:"500" }}>Slide Down <i class="fa fa-angle-down fa-lg"></i></p>
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
                                        <div className="slide__text">
                                            <h2 className="slide__text-heading">A PLACE FOR FAMILY</h2>
                                            <p className="slide__text-desc">Whether part of a party of fifty or a party of two,
                                            your experience thriughout our elegant, yet comfortable space is eventful. We are sharing
                                            our long-held Lebanese-Mediterranean traditions with a modern contemporary twist.</p>
                                        </div>
                                </Col>
                            </Row>
                        </Animated>
                    </Container>

                    
                    <img
                        className="d-block w-100"
                        src="img/9.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Animated animationIn="slideInLeft" animationInDuration="3000">
                    <h3>Third slide label</h3>                    
                    </Animated>
                    <p style={{fontSize:"20px", fontWeight:"500" }}>Slide Down <i class="fa fa-angle-down fa-lg"></i></p>
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
                                        <div className="slide__text">
                                            <h2 className="slide__text-heading">Project Name 4</h2>
                                            <p className="slide__text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus illo 
                                            debitis nihil animi facere, doloremque voluptate tempore quia. Lorem ipsum dolor sit amet, consectetur adipisicing 
                                            elit. Distinctio veniam minus illo debitis nihil animi facere, doloremque voluptate tempore quia.</p>
                                        </div>
                                </Col>
                            </Row>
                        </Animated>
                    </Container>


                    <img
                        className="d-block w-100"
                        src="img/10.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Animated animationIn="slideInLeft" animationInDuration="3000">
                    <h3>Third slide label</h3>                    
                    </Animated>
                    <p style={{fontSize:"20px", fontWeight:"500" }}>Slide Down <i class="fa fa-angle-down fa-lg"></i></p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            
            </div>
        );
    }
}

export default Slider;