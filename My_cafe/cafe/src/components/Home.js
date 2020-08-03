import React, { Component } from 'react'
import Slider from './Slider'
import CardsGroup from './CardsGroup'

class Home extends Component{
    render(){
        return(
            <div>
                <Slider />
                <div style={{marginTop:"5em"}}>
                     <CardsGroup />
                </div>
                
            </div>
        )
    }
}

export default Home;