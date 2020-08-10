import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import StartersComponent from './StartersComponent'
import MainCourseComponent from './MainCourseComponent'



class Menu extends Component{

    

    render(){
        return(
            <div>
                <div className="header-box4" ></div>
                <Container>
                    <StartersComponent />
                    
                    <MainCourseComponent />
                </Container>
            </div>
        )
    }
}



export default Menu;