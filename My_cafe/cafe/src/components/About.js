import React, { Component } from 'react'
import './Functions'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Footer from './Footer';

class About extends Component{

    componentDidMount(){
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div style={{ color:"#fff"}}>
                
                <div className="header-box1 " >
                    <div className="img1"></div>
                    <div className="img2"></div>                 
                </div>

                <Container style={{marginTop:"4em"}}>
                    <Row>
                        <Col md={6} className="text-center my-auto">
                            <h2 style={{fontFamily:"'Dancing Script', cursive", fontSize:"3em", color:"#bd7c7c"}}>Our Story</h2>
                            <h4 style={{fontFamily:"PT Serif', serif", fontSize:"37px",fontWeight:"700" , color:"#574541"}}>SINCE 1975</h4>
                            <h5 style={{fontFamily:"'Dancing Script', cursive", color:"#bd7c7c", fontSize:"27px"}}>"There is no sincerer love than the love of food"</h5>
                            <h6>- GEORGE BERNARD SHAW</h6>
                            <div className="seperator"></div>
                            <p style={{fontSize:"17px"}}>
                                Welcome. This is Royal plate. Elegant & sofisticated restaurant template. Royal plate offers different 
                                home page layouts with smart and unique design, showcasing beautifully designed elements every restaurant
                                website should have. Smooth animations, fast loading and engaging user experience are just some of the 
                                features this template offers. So, give it a try and dive into a world of royal restaurant websites.
                            </p>
                        </Col>
                        <Col md={6} className="my-auto">
                            <img src="img/19.jpg" alt="fresh vegetable"  />
                        </Col>
                    </Row>
                </Container>
                

                <Container style={{marginTop:"4em"}}>
                    <Row>
                        <Col md={6}>
                            <img src="img/vegetable.png" alt="fresh vegetable" />
                        </Col>
                        <Col md={6} className="text-center my-auto">
                            <h2 style={{fontFamily:"'Dancing Script', cursive", fontSize:"3em", color:"#bd7c7c"}}>Our Approach</h2>
                            <h4 style={{fontFamily:"PT Serif', serif", fontSize:"37px",fontWeight:"700" , color:"#574541"}}>ALWAYS FRESH INGRIDIENTS</h4>
                            <div className="seperator"></div>
                            <p style={{fontSize:"17px"}}>
                                Here at Royal Plate we work with only the best food supliers like small family farms, insuring that we 
                                always have the best and always fresh ingredients. You’ll find a large variety of dishes made to satisfy 
                                any taste, from sea food, steaks, variety of natural soups, pasta, salads, finest deserts and vines...
                            </p>
                        </Col>
                        
                    </Row>
                </Container>
                


                <div className="bg-img2">
                    <h2>Our most valuable asset</h2>
                    <h1>ALWAYS FRIENDLY & PROFESSIONAL STAFF</h1>    
                </div>


                <div style={{marginTop:"5em"}}>
                    <section style={{marginTop:"1em"}} className="chef1">
                        <Container >
                            <Row className="justify-content-center">

                                <Col lg={4} md={12} className="text-center">
                                    <img className="chefs-img" src="img/chef4.jpg" alt="Peter" />
                                </Col>
                                <Col  lg={8} md={12}>
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

                    <section style={{marginTop:"4em"}} className="chef2">
                        <Container >
                            <Row className="justify-content-center">

                                <Col lg={4} md={12} className="text-center">
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

                    <section style={{marginTop:"4em"}} className="chef3">
                        <Container >
                            <Row className="justify-content-center">

                                <Col lg={4} md={12} className="text-center">
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

                    <div className="header-box2" >
                        <div className="img3"></div>
                        <div className="img4"></div>
                        <div className="img5"></div>
                        <div className="img6"></div>
                    </div>

                    <Container style={{marginTop:"10em"}} >
                        <Row className="justify-content-center">
                            
                            <Col md={6} className="mx-auto text-center">
                                <div className="media-OurPeople text-style6">
                                    <h2  className="headings">Our people</h2>
                                    <div  className="seperator "> </div>
                                    <p>ilili is a place for family, the one you’re born into and the one you create around food, love and 
                                        friendship. Our attentive staff ensures that your entire dining experience with us is stellar from 
                                        beginning to end.</p>
                                </div>
                            </Col>

                            <Col md={6} className=" mx-auto" >
                                <img className="media-img5 OurPeople-img" height="450px" width="650px" src="img/33.webp" alt="Our people" />
                            </Col>
                        </Row>
                    </Container>

                    <Container style={{marginTop:"21em"}}>
                        <Row className="justify-content-center">
                            <Col md={6} className=" mx-auto">
                                <img className="media-img6" height="500px" width="700px" src="img/32.jpeg" alt="Our people" />
                            </Col>
                            <Col md={6} className=" mx-auto text-center">
                                <div className="media-OurFood  text-style5 ">
                                    <h2  className="headings">Our food</h2>
                                    <div  className="seperator "> </div>
                                    <p>Every dish at ilili has it's own story from the traditional recipes direct from Lebanon, to modern 
                                    updates that tell the history of our team, of our cooks and chefs who have left their mark on our kitchen,
                                    and our serving staff and managers who have been ambassadors of hospitality.<br/>
                                    Our menu is never done - we find inspiration all around, in new ingredients, new approaches, and fresh 
                                    takes on old standards.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                  

                </div>
                <Footer />
            </div>
        )
    }
}

export default About;

