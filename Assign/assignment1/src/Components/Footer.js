import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Footer(){
    return(
        <div className="footer fixed-bottom ">
        <Row className="justify-content-center">
            <Col xs={3} className="text-center">
                <i className="fa fa-search fa-2x" aria-hidden="true" />
                <h6>SEARCH</h6>
            </Col>
            <Col xs={3} className="text-center">
                <i className="fa fa-calendar-check-o  fa-2x" aria-hidden="true" />
                <h6>EVENTS</h6>
            </Col>
            <Col xs={3} className="text-center">
                <i className="fa fa-gift fa-2x" aria-hidden="true" />
                <h6>OFFERS</h6>
            </Col>
            <Col xs={3} className="text-center">
                <i className="fa fa-user fa-2x" aria-hidden="true" />
                <h6>ACCOUNTS</h6>
            </Col>
        </Row>
        </div>
    )
}
 

export default Footer;