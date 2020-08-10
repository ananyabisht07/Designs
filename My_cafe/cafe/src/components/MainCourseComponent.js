import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap'
import { Media } from 'reactstrap';

function RenderMainCourse({dish}){
    return(
        <Row  >
            <Col md={10}>
                <Media  >
                    <Media left middle href="#">
                        <Media object style={{borderRadius:"50%", width:"110px", height:"110px"}} src={dish.image} alt="image" />&nbsp;  &nbsp;
                    </Media>
                    <Media key={dish.id} body className="my-auto" >
                        <Media heading>{ dish.name } </Media>
                        { dish.ingredients }
                    </Media>
                </Media> <br/>
            </Col>
            <Col md={2} className="my-auto" style={{fontFamily:"'Dancing Script', cursive", fontSize:"25px", color:"#bd7c7c"}}> ${ dish.price } </Col>
        </Row> 
    )
}


class MainCourseComponent extends Component{

    
    render(){
        
        const { maincourse } = this.props;
        const dishList = maincourse.map((dish) => {
            return (
            
                <RenderMainCourse key={dish.id} dish={dish} />
            );
        });
        return(
            <div>
                <Container>
                        <div className="text-center" style={{marginTop:"4em", marginBottom:"3em"}}>
                            <h2 style={{fontFamily:"'Dancing Script', cursive", fontSize:"3em", color:"#bd7c7c"}}>More Concrete</h2>
                            <h4 style={{fontFamily:"PT Serif', serif", fontSize:"37px",fontWeight:"700" , color:"#574541"}}>MAIN COURSE</h4>
                        </div>
                        <Row>
                            <Col md={6} style={{color:"#fff"}}>
                                { dishList.slice(0,5) }                           
                            </Col>

                            <Col md={6} style={{color:"#fff"}}>
                                { dishList.slice(5,10) }
                            </Col>
                        </Row>
                        
                    </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        maincourse : state.maincourse
    }
}

export default connect(mapStateToProps)( MainCourseComponent);