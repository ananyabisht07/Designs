import React from 'react'
import { Container, Row, Col, Card, Button, Jumbotron } from 'react-bootstrap'

function CardsGroup(){
    return(
        <section className="cardsGroup-bg">
            <Container>
                <Row className="justify-content-center">
                    
                    <Col md={12} lg={4} style={{marginBottom:"2em"}}>
                        <Card className="card-style" style={{border:"none",borderRadius:"12px",}} >
                            <Card.Img style={{border:"none",borderRadius:"15px",height:"100%"}}  src="img/13.jpeg" />
                            <Card.Body className="info">
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text >
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Read More...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} lg={8} style={{marginBottom:"2em"}}>
                        <Card className="card-bg" style={{border:"none",borderRadius:"15px"}}>
                            <Card.Body style={{padding:"0px",border:"0px"}} >
                                <Row>
                                    <Col md={6} sm={12} >
                                        <Card.Img style={{ borderTopLeftRadius:"15px", borderBottomLeftRadius:"15px"}}  variant="top" src="img/15.jpeg"  alt="mission" />
                                    </Col>
                                    <Col md={6} sm={12} style={{marginTop:"30px",marginBottom:"25px" }} >
                                        <Card.Title className="heading1">SUSTAINABILITY</Card.Title>

                                        <Card.Text style={{marginTop:"30px",fontSize:"19px",fontWeight:"500", }}>
                                            Committed to the triple bottom line-people, planet and profit-we do everything we can to 
                                            make our restaurant environment as healthy as possible.
                                        </Card.Text>

                                    </Col>
                                </Row>   
                            </Card.Body>  
                        </Card>         
                    </Col>

                    
                </Row>
            </Container>
        </section>
    )
}

export default CardsGroup;

