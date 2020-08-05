import React from 'react';
import { Jumbotron, Card, Container, Row, Col, Button } from 'react-bootstrap';

function BusinessPg(){
    return(
        <div>
            <Jumbotron className="jumbo"></Jumbotron>
            <Container>
                <h1 className="headings" style={{marginTop:"80px"}}>Speciality</h1>
                <h4>A few famous drinks</h4>
        
                <Row style={{marginTop:"80px"}} className="justify-content-center">
                    <Col xs={6}>
                        <Card className="card-style1">
                            <Card.Img variant="top" src="img/drink 1.png" />
                        </Card>
                        <h4 className="text-center">Birthday Parties</h4>
                    </Col>
                    <Col xs={6}>
                        <Card className="card-style2">
                            <Card.Img variant="top"  src="img/beer 1.png" />
                        </Card>
                        <h4 className="text-center">Disco Nights</h4>

                    </Col>
                </Row>

                <h1 className="headings" style={{marginTop:"2em"}}>Offers</h1>

                <div className="">
                    <Card >
                        <Card.Body className="card-style4">
                            <Row className=" justify-content-center">
                                <Col xs={4} className="text-center">
                                    <div className="my-auto card-style5">
                                        <h5>WED</h5>
                                        <h6>JUL 26</h6> 
                                    </div>
                                </Col>
                                <Col xs={4}  className="my-auto text-center">
                                    <div>
                                        <h4>WED</h4>
                                        <h5>JUL 26</h5> 
                                    </div>
                                </Col>
                                <Col xs={4}  className=" my-auto text-center">
                                    <div>
                                        <h4>WED</h4>
                                        <h5>JUL 26</h5> 
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>


                <Row className="justify-content-center">
                    <Col xs={12} sm={12}>
                            <Card className="card-style3">
                                <Row>
                                    <Col xs={6}>
                                        <Card.Img style={{padding:"20px"}} variant="top" src="img/vector.png" /> 
                                    </Col>
                                    <Col xs={6} className="my-auto text-center">
                                        <h3>Free Drinks</h3>
                                        <h5> T&C</h5>
                                        <h4>JUL 25 | 10 PM</h4>
                                    </Col>
                                </Row>
                            </Card>
                            <Card.Body className="redeem text-center">
                                <Card.Text>REDEEM</Card.Text>
                            </Card.Body>
                    </Col>
                </Row>
                
                <h1 className="headings" style={{marginTop:"100px"}}>Events</h1>

                <div className="">
                    <Card >
                        <Card.Body className="card-style4">
                            <Row className=" justify-content-center">
                                <Col xs={4} className="text-center">
                                    <div className="my-auto card-style5">
                                        <h5>WED</h5>
                                        <h6>JUL 26</h6> 
                                    </div>
                                </Col>
                                <Col xs={4}  className="my-auto text-center">
                                    <div>
                                        <h4>WED</h4>
                                        <h5>JUL 26</h5> 
                                    </div>
                                </Col>
                                <Col xs={4}  className=" my-auto text-center">
                                    <div>
                                        <h4>WED</h4>
                                        <h5>JUL 26</h5> 
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>

                <Row className="justify-content-center">
                    <Col xs={12} sm={12}>
                            <Card className="card-style6">
                                <Row>
                                    <Col xs={6}>
                                        <Card.Img style={{padding:"20px"}} variant="top" src="img/mic 1.png" /> 
                                    </Col>
                                    <Col xs={6} className="my-auto text-center">
                                        <h2>Comedy Night</h2>
                                    </Col>
                                </Row>
                            </Card>
                            <Card.Body className="card-style7 ">
                                <Card.Text>
                                    <h5>Sashank Kumar</h5>
                                    <h6>Comedy</h6>
                                    <Row>
                                        <Col xs={6} className=""><h5>JUL 25 | 10 PM</h5></Col>
                                        <Col xs={6} className=""><Button className="btn">INTERESTED</Button></Col>
                                    </Row> 
                                </Card.Text>
                            </Card.Body>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default BusinessPg;