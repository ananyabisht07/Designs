import React, { Component } from 'react'
import { Jumbotron} from "react-bootstrap";

class WavyCard extends Component{

    render(){
        return(
            <Jumbotron className="wavy-jumbo" >
                <div className="container">
                    <div className="row justify-content-center">
                        
                            <div className="col-md-12 wavy-card">
                                <div className="card-content">
                                    
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
}

export default WavyCard;


