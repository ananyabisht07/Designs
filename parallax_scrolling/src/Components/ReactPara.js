import React, { Component } from 'react';
import { Parallax} from 'react-parallax';
import { Container } from 'react-bootstrap';

class ReactPara extends Component{
    render(){
        return(
        
                <Parallax bgImage={ require('./bg8.png')}
                strength={500}
                
                >
                    <div style={{ height: '500px' }}></div>
                </Parallax>
            
        )
    }
}

export default ReactPara;