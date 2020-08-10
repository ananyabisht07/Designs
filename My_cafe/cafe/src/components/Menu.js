import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import StartersComponent from './StartersComponent'
import MainCourseComponent from './MainCourseComponent'
import Footer from './Footer'
import DessertsComponent from './DessertsComponent'


class Menu extends Component{

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div>
                <div className="header-box4" ></div>
                <Container>
                    <StartersComponent />

                    <MainCourseComponent />

                    <DessertsComponent />
                </Container>
                <Footer />
            </div>
        )
    }
}



export default Menu;