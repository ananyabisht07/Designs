import React, { Component } from 'react';
import { Jumbotron, Card, Container, Row, Col, Button } from 'react-bootstrap';

//this.state.clicked?"my-auto move_to":"my-auto"

class BusinessPg extends Component{

    constructor(props){
        super(props);
        this.state={
            bgColor1:false,
            bgColor2:false,
            bgColor3:false,
            move: null,
            left: 0,
            currIndex: 0,
            width:null,
            clicked:false
        }
        this.whenRresize = this.whenRresize.bind(this);
    }

    whenRresize() {
        const { currIndex } = this.state;
        const width = document.getElementById("Cal").clientWidth;
        this.setState({ left: width * 0.337 * currIndex });
      }
    
      componentDidMount() {
        window.addEventListener("resize", this.whenRresize);
      }
    
      dateSelect(index) {
        var { width } = this.state;
        if (!width) {
          width = document.getElementById("Cal").clientWidth;
        }
    
        this.setState({
          move: "right",
          left: width * 0.337 * index,
          currIndex: index,
          clicked:true
        });
    }

    
    
    onClick = () => this.props.history.push("/offer");

    OnClickBg1 = () => {
        
        this.setState({           
            bgColor1: true,
            bgColor2: false,
            bgColor3: false,
        })
    }

    OnClickBg2 = () => {
        
        this.setState({           
            bgColor2: true,
            bgColor1:false,
            bgColor3: false,
        })
    }
    OnClickBg3 = () => {
        
        this.setState({           
            bgColor3: true,
            bgColor1: false,
            bgColor2: false,
        })
    }
    
    

    render(){
        

        const {move, left, clicked } = this.state;
        return(
            <div>
                <Jumbotron className="jumbo"></Jumbotron>
                <Container>
                    <h1 className="headings" style={{marginTop:"80px"}}>Speciality</h1>
                    <h4 className="sub-headings">A few famous drinks</h4>
            
                    <Row style={{marginTop:"80px"}} className="justify-content-center">
                        <Col xs={6}>
                            <Card className="card-style1">
                                <Card.Img variant="top" src="img/drink 1.png" />
                            </Card>
                            <h4 className="text-center">Birthday Parties</h4>
                        </Col>
                        <Col xs={6}>
                            <Card className="card-style2">
                                <Card.Img height="70%" variant="top"  src="img/beer 1.png" />
                            </Card>
                            <h4 className="text-center">Disco Nights</h4>
    
                        </Col>
                    </Row>
    
                    <h1 className="headings" style={{marginTop:"2em"}}>Offers</h1>
    
                    
    
                    <Card style={{marginBottom:"2em",background:"#FFEC50",borderRadius:"13px",color:"#000"}} className="myDates" id="Cal">
                        <Card.Body>
                        <Row className="justify-content-center">
                            <Col
                                xs={4}
                                className="text-center"
                                onClick={() => this.dateSelect(0)}>
                                    <div style={{ cursor: "pointer", }}>
                                        <h5>WED</h5>
                                        <h6>JUL 26</h6>
                                    </div>
                            </Col>
                            <Col
                                xs={4}
                                className={this.state.clicked ? "my-auto text-center textColor":"my-auto text-center"}
                                onClick={() => this.dateSelect(1)}>
                                    <div
                                        className="my-auto"
                                        style={{ cursor: "pointer", }}>
                                            <h5>THU</h5>
                                            <h6>JUL 27</h6>
                                    </div>
                            </Col>
                            <Col
                                xs={4}
                                className=" my-auto text-center"
                                onClick={() => this.dateSelect(2)}>
                                    <div
                                        className="my-auto"
                                        style={{ cursor: "pointer", }}>
                                            <h5>FRI</h5>
                                            <h6>JUL 28</h6>
                                    </div>
                            </Col>
                        </Row>
                        <div className={move? move === "right"? "selectedBox move-right": "selectedBox move-left": "selectedBox"}
                            style={{position: "absolute",top: 0,left: left,height: 100,width: "33%",}}>
                        </div>

                        </Card.Body>
                  </Card>
    
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
                                </Card>

                                <Card.Body onClick={this.onClick}  style={{cursor:"pointer"}}  className="redeem text-center">
                                    REDEEM 
                                </Card.Body>
                        </Col>
                    </Row>
                    
                    <h1 className="headings" style={{marginTop:"100px"}}>Events</h1>
                    <Card style={{marginBottom:"2em",background:"#FFF281",borderRadius:"13px",color:"#000"}} className="myDates" id="Cal">
                    <Card.Body>
                    <Row className="justify-content-center">
                        <Col
                            xs={4}
                            className="text-center"
                            onClick={() => this.dateSelect(0)}>
                                <div style={{ cursor: "pointer", }}>
                                    <h5>WED</h5>
                                    <h6>JUL 26</h6>
                                </div>
                        </Col>
                        <Col
                            xs={4}
                            className={this.state.clicked ? "my-auto text-center textColor":"my-auto text-center"}
                            onClick={() => this.dateSelect(1)}>
                                <div
                                    className="my-auto"
                                    style={{ cursor: "pointer", }}>
                                        <h5>THU</h5>
                                        <h6>JUL 27</h6>
                                </div>
                        </Col>
                        <Col
                            xs={4}
                            className=" my-auto text-center"
                            onClick={() => this.dateSelect(2)}>
                                <div
                                    className="my-auto"
                                    style={{ cursor: "pointer", }}>
                                        <h5>FRI</h5>
                                        <h6>JUL 28</h6>
                                </div>
                        </Col>
                    </Row>
                    <div className={move? move === "right"? "selectedBox move-right": "selectedBox move-left": "selectedBox"}
                        style={{position: "absolute",top: 0,left: left,height: 100,width: "33%",}}>
                    </div>

                    </Card.Body>
              </Card>
    
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12}>
                                <Card className="card-style6">
                                    <Row>
                                        <Col xs={6}>
                                            <Card.Img variant="top" src="img/mic 1.png" /> 
                                        </Col>
                                        <Col xs={6} className="my-auto text-center">
                                            <Card.Img variant="top" src="img/Comedy Night.png" /> 
                                        </Col>
                                    </Row>
                                </Card>
                                <Card.Body className="card-style7 ">
                                    <h5>Sashank Kumar</h5>
                                    <h6 className="sub-headings">Comedy</h6>
                                    <Row>
                                        <Col xs={6} className="my-auto"><h5>JUL 25 | 10 PM</h5></Col>
                                        <Col xs={6} className=""><Button className="btn">INTERESTED</Button></Col>
                                    </Row> 
                                </Card.Body>
                        </Col>
                    </Row>

                    
    
                </Container>
            </div>
        )    
    }
    }

export default BusinessPg;