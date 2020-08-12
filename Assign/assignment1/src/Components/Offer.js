import React, { useState } from 'react';
import { Row, Col, Container, Card,} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';



function Offer(){
    
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

        return(
            <Container style={{marginBottom:"20em", marginTop:"10em"}}>
                <h1 className="headings">Offer</h1>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12}>
                            <Card className="card-style3">
                                <Row>
                                    <Col xs={6}>
                                        <Card.Img style={{padding:"20px"}} variant="top" src="img/vector.png" /> 
                                    </Col>
                                    <Col xs={6} className="my-auto">
                                        <h3>Free Drinks</h3>
                                        <h5 className="sub-headings"> T&C</h5>
                                        <h4>JUL 25 | 10 PM</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={10} className=" mx-auto ">
                                        <p className="alignmentt" >
                                            - Must be availed within 12 hours <br/>
                                            - One-time use only<br/>
                                            - Check-in required to avail
                                        </p>
                                        </Col>
                                </Row>
                            </Card>
                            
                            

                            <Card.Body  onClick={() => setShowMessage(true)}  className="redeem1 text-center">
                                <Card.Text> REDEEM </Card.Text>  
                                <CSSTransition 
                                    in={showMessage} 
                                    timeout={1500} 
                                    classNames="alert" 
                                    unmountOnExit
                                    onEnter={() => setShowButton(false)}
                                    onExited={() => setShowButton(true)}>
                                
                                <div className="text-center qrCode" >
                                    <img height="190px" width="190px" src="img/QRCode.png"  alt="QRCode" />
                                </div> 
                            </CSSTransition>                       
                            </Card.Body>

                            
                    </Col>
                </Row>

                


            </Container>
        )    
    
}

export default Offer;