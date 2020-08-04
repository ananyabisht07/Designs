import React, { Component } from 'react'
import './Functions'
import { Container, Row, Col } from 'react-bootstrap'

class About extends Component{
    render(){
        return(
            <div style={{ color:"#fff"}}>
                
                <div className="header-box1 " >
                    <div className="img1"></div>
                    <div className="img2"></div>
                </div>
                

                <div style={{marginTop:"10em"}}>
                <h1 className="text-center our-team">OUR TEAM</h1>
                    <section style={{marginTop:"1em"}} className="chef1">
                        <Container >
                            <Row className="justify-content-center">

                                <Col lg={4} md={12}>
                                    <img className="chefs-img" src="img/chef4.jpg" alt="Peter" />
                                </Col>
                                <Col lg={8} md={12}>
                                    <h1 className="text-center">Peter</h1>
                                    <p>Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the 
                                    shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen
                                    whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration 
                                    to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this 
                                    restaurant, pioneering cross-cultural culinary connections. </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section style={{marginTop:"5em"}} className="chef2">
                        <Container >
                            <Row className="justify-content-center">

                                <Col lg={4} md={12}>
                                <img className="chefs-img" src="img/chef2.jpg" alt="Peter" />
                                </Col>
                                <Col lg={8} md={12}>
                                    <h1 className="text-center">Peter</h1>
                                    <p>Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the 
                                    shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen
                                    whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration 
                                    to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this 
                                    restaurant, pioneering cross-cultural culinary connections. </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section style={{marginTop:"5em"}} className="chef3">
                        <Container >
                            <Row className="justify-content-center">

                                <Col lg={4} md={12}>
                                    <img className="chefs-img" src="img/head-chef.jpeg" alt="Peter" />
                                </Col>
                                <Col lg={8} md={12}>
                                    <h1 className="text-center">Peter</h1>
                                    <p>Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the 
                                    shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen
                                    whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration 
                                    to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this 
                                    restaurant, pioneering cross-cultural culinary connections. </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <div className="header-box2" ></div>
                        <div className="img3"></div>
                        <div className="img4"></div>
                        <div className="img5"></div>
                        <div className="img6"></div>
                </div>
            </div>
        )
    }
}

export default About;