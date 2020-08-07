import React,{Component} from 'react'
import { Row, Col, Form, Button, Image} from 'react-bootstrap'

class BookMyTable extends Component{
    render(){
        return(
            <div className="container">
                <Row>
                    <Col md={4}>
                        <img src="img/34.jfif" alt="img" height="550px" width="350px" />
                    </Col>

                    <Col md={4} className="my-auto book-table">
                        <h3>Reservation</h3>
                        <h2>Book Your Table</h2>
                        <div className="seperator"></div>
                        <Form>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Date" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Time" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Number of People" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                BOOK TABLE
                            </Button>
                        </Form>
                    </Col>

                    <Col md={4}>
                        <Image src="img/37.jpg" alt="imgage" width="350px" height="550px" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BookMyTable;