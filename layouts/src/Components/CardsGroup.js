import React from 'react'
import { Container, Row, Col, Card, Button, Jumbotron } from 'react-bootstrap'

function CardsGroup(){
    return(
        <section className="cardsGroup-bg">
            <Container>
                <Row className="justify-content-center">
                    
                    <Col md={4}>
                        <Card className="card-style" style={{border:"none"}} >
                            <Card.Img  src="img/i5.jpg" height="350"/>
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
                    <Col md={4}>
                        <Card className="card-style" style={{border:"none"}}>
                            <Card.Img variant="top" src="img/i8.jpg" height="350" />
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

                    <Col md={4}>
                        <Card className="card-style" style={{border:"none"}} >
                            <Card.Img variant="top" src="img/i9.jpg" height="350"  />
                            <Card.Body className="info">
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Read More...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CardsGroup;

