import React, { Component } from 'react'
import Slider from './Slider'
import CardsGroup from './CardsGroup'
import { Container, Image, Col, Row } from 'react-bootstrap'
import "aos/dist/aos.css"
import Aos from 'aos'
import Footer from './Footer';

class Home extends Component{
    componentDidMount(){
        Aos.init({
            duration: 1600,
            offset: 400
        })
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div>
                <Slider />


               
                <div style={{marginTop:"7em"}} className="containder-style">
                    <Container >
                        <Row className="justify-content-center">
                            <Col md={12} lg={6} className="para  text-center">
                                <Image className="media-img2 img-animation" src="img/22.jpg" alt="img" width="450" height="600" /> 
                            </Col>
                            <Col md={12} lg={6} className="para text-center mx-auto ml-auto my-auto text-style2" style={{marginTop:"5em",}}>
                                <h2 data-aos="fade-right" className="headings"> Be the change</h2>
                                <div data-aos="fade-right" className="seperator "> </div>
                                <p data-aos="fade-left" style={{marginTop:30}}>
                                    Our major work based on Child Education, Child health, Save Girl Child, Girl Education, Women health care
                                    and education, Employment, Training, poor rehabilitation, Food & Nutrition, plantation, Serving old 
                                    orphan people, public awareness etc.
                                </p>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
                
                <div style={{marginTop:"7em"}} className="containder-style">
                    <Container >
                        <Row className="justify-content-center">
                            <Col md={12} lg={6} className=" text-center mx-auto ml-auto my-auto text-style3">
                                <h2 data-aos="fade-right" className="headings">HOST YOUR NEXT EVENT</h2>
                                <div data-aos="fade-right" className="seperator "> </div>
                                <p data-aos="fade-left" style={{marginTop:30}} >
                                    ilili specializes in Private Parties, Corporate and Press Events, Weddings and other celebrations for groups
                                    from 5 to 500. We feature four private event spaces perfect for any occasion, as well as the option to book
                                    the entire restaurant. Menus range from passed hors d'oeuvres and cocktails to our diverse shared menus for
                                    seated dinners. 
                                </p>
                            </Col>
                            <Col md={12} lg={6} className="para mx-auto text-center">
                                <Image className="media-img3 img-animation" src="img/18.jpg" alt="img"  width="550" height="600" /> 
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div style={{marginTop:"7em"}} className="containder-style">
                    <Container >
                        <Row className="justify-content-center">
                            <Col md={12} lg={6} className="mx-auto ml-auto my-auto  text-center" style={{marginTop:"30px"}}>
                                <Image className="media-img4 img-animation" src="img/21.jpg" alt="img" width="550" height="500"/> 
                            </Col>
                            <Col md={12} lg={6} className="text-center mx-auto  my-auto text-style4" style={{marginTop:"5em",}}>
                                <h2  className="headings">CATERING TO YOU</h2>
                                <div  className="seperator "> </div>
                                <p style={{marginTop:30}}>
                                    Whether you are looking for a special lunch to reward your team for its hard work, or to impress an important 
                                    client with a perfect dinner in your home, ilili can cater events from 5 to 500 guests. 
                                </p>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>

                <div style={{marginTop:"10em"}}>
                    <CardsGroup />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;