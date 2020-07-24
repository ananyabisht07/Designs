import React from 'react'
import { Container, Row, Card, Jumbotron, Col } from 'react-bootstrap';

function WavyCards(){
    return(
        <Jumbotron style={{marginBottom:"0", background:"#000", width:"100%"}}>
            <div className="container">
                <div className="row justify-content-center">
                    
                        <div className="col-md-4 wavy-card">
                            <div className="card-content">
                                <h3>Water Wave Div</h3>
                                Lorem ipsum dolar sit amet, Lorem ipsum dolar sit amet Lorem ipsum dolar sit amet,
                            </div>
                        </div> 
                        
                        <div className=" col-md-4 wavy-card">
                            <div className="card-content">
                                <h3>Water Wave Div</h3>
                                Lorem ipsum dolar sit amet, Lorem ipsum dolar sit amet Lorem ipsum dolar sit amet,
                            </div>
                        </div>
                
                    
                        <div className="col-md-4 wavy-card">
                            <div className="card-content">
                                <h3>Water Wave Div</h3>
                                Lorem ipsum dolar sit amet, Lorem ipsum dolar sit amet Lorem ipsum dolar sit amet,
                            </div>
                        </div>
                    
                    
                </div>
                <svg>
                    <filter id="wavy">
                        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
                            <animate attributeName="baseFrequency" dur="60s" 
                                values="0.02;0.05;0.02" repeatCount="indefinite" />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="30" />
                    </filter>
                </svg>
            </div>
        </Jumbotron>
        
    );
}

export default WavyCards;


