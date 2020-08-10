import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Media } from 'reactstrap';
import { connect } from 'react-redux'


class Menu extends Component{

    

    render(){

        const { starters1, starters2 } = this.props;
        const dishesList1 = starters1.length ? (
            starters1.map( dish => {
                return(
                    <div>
                        <Row>
                            <Col md={10}>
                                <Media key={dish.id} >
                                    <Media left middle href="#">
                                        <Media object style={{borderRadius:"50%", width:"110px", height:"110px"}} src={dish.image} alt="image" />&nbsp;  &nbsp;
                                    </Media>
                                    <Media body className="my-auto" >
                                    <Media heading>{ dish.name } </Media>
                                        { dish.ingredients }
                                    </Media>
                                </Media> <br/>
                            </Col>
                            <Col md={2} className="my-auto"> ${ dish.price } </Col>
                        </Row> 
                    </div>
                )
            })
        ) : ( <div>...</div> )

        const dishesList2 = starters2.length ? (
            starters2.map( dish => {
                return(
                    <div>
                        <Row>
                            <Col md={10}>
                                <Media key={dish.id} >
                                    <Media left middle href="#">
                                        <Media object style={{borderRadius:"50%", width:"110px", height:"110px"}} src={dish.image} alt="image" />&nbsp;  &nbsp;
                                    </Media>
                                    <Media body className="my-auto" >
                                    <Media heading>{ dish.name } </Media>
                                        { dish.ingredients }
                                    </Media>
                                </Media> <br/>
                            </Col>
                            <Col md={2} className="my-auto"> ${ dish.price } </Col>
                        </Row> 
                    </div>
                )
            })
        ) : ( <div>...</div> )

        return(
            <div>
                <div className="header-box4" ></div>
                <Container>
                    <div className="text-center" style={{marginTop:"4em", marginBottom:"3em"}}>
                        <h2 style={{fontFamily:"'Dancing Script', cursive", fontSize:"3em", color:"#bd7c7c"}}>For Start</h2>
                        <h4 style={{fontFamily:"PT Serif', serif", fontSize:"37px",fontWeight:"700" , color:"#574541"}}>STARTERS</h4>
                    </div>
                    <Row>
                        <Col md={6} style={{color:"#fff"}}>
                            {dishesList1}                           
                        </Col>

                        <Col md={6} style={{color:"#fff"}}>
                            {dishesList2}
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        starters1 : state.starters1,
        starters2 : state.starters2
    }
}

export default connect(mapStateToProps)(Menu);