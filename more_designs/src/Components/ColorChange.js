import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
//import Rainbow from './Rainbow';


class ColorChange extends Component{
    state={
        bgColor:"black"
    }

    OnClickBg = () => {
        const randomBg= 'bg' + [Math.floor(Math.random() * 5)];
        console.log(randomBg)
        this.setState({
            bgColor:randomBg
        })
    }
    
    render(){

        return(
            <section onClick={this.OnClickBg} className = {this.state.bgColor}>
                <Button variant="light" size="lg">Light</Button> 
                <Button variant="dark" size="lg">Dark</Button>{' '}
            </section>
        )
    }
}
export default ColorChange;