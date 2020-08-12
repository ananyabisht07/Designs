import React from 'react';
import {Carousel, Row, Col} from 'react-bootstrap'

export default function Catering(){
    return(
        <div>
            <Carousel className="carouselCatering">
                <Carousel.Item>
                    <Row className="justify-content-center">
                        <Col md={6} >
                        <img
                            style={{backgroundSize:"cover"}}
                            width="100%"
                            className="d-block w-100"
                            src="img/55.jpg"
                            alt="First slide"
                            />
                        </Col>
                        <Col md={5} className="text-center my-auto" >
                            <h2 style={{fontFamily:"'Dancing Script', cursive", fontSize:"3em", color:"#bd7c7c"}}>Catering</h2>
                            <h4 style={{fontFamily:"PT Serif', serif", fontSize:"37px",fontWeight:"700" , color:"#574541"}}>SOCIAL EVENTS</h4>
                            <p>Weather you are celeberating your birthday, having a family reunion or
                            something else, we'll make it enjoyable and memorable. Our experts have years 
                            of experience in party and will make sure it is a delicious success, enjoying
                            and memorable for you and your guests!</p>
                        </Col>
                    </Row>  
                </Carousel.Item>

                <Carousel.Item>
                    <Row>
                        <Col md={6} >
                        <img
                            className="d-block w-100"
                            src="img/56.jpg"
                            alt="First slide"
                            />
                        </Col>
                        <Col md={5} className="my-auto text-center">
                            <h2 style={{fontFamily:"'Dancing Script', cursive", fontSize:"3em", color:"#bd7c7c"}}>Catering</h2>
                            <h4 style={{fontFamily:"PT Serif', serif", fontSize:"37px",fontWeight:"700" , color:"#574541"}}>CORPORATE EVENTS</h4>
                            <p>Planning an important business meeting with your partners? Impress them with
                            lunch in Eternity. Eternity covers everything from business lunches to custom team
                            occasion. Our catering specialist will plan your event to meet your need.<br/> Time to put your party hat on!</p>
                        </Col>
                    </Row>  
                </Carousel.Item>

                <Carousel.Item>
                    <Row>
                        <Col md={6} >
                        <img
                            className="d-block w-100"
                            src="img/58.jpg"
                            alt="First slide"
                            />
                        </Col>
                        <Col md={5} className="my-auto text-center" >
                           <h2 style={{fontFamily:"'Dancing Script', cursive", fontSize:"3em", color:"#bd7c7c"}}>Catering</h2>
                            <h4 style={{fontFamily:"PT Serif', serif", fontSize:"37px",fontWeight:"700" , color:"#574541"}}>SPECIAL EVENTS</h4>
                            <p>Celebrate your special event in beautiful atmosphere of Eternity. Exquisite & creative cousine, friendly atmosphere and highly
                            professiona staff will make your special day beautiful and enjoyable, You can select from 
                            couple of pre-made menus for every occasion taht should please many different palates
                            or work with us to create your own menu.</p>
                    
                        </Col>
                    </Row>  
                </Carousel.Item>

            </Carousel>
        </div>
    )
}