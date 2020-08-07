import React, { Component } from 'react'
import OnScroll from './OnScroll'


class Contact extends Component{

    componentDidMount(){
        window.scrollTo(0, 0)
      }
      
    render(){
        return(
            <div>
                <OnScroll />
                
            </div>
        )
    }
}

export default Contact;