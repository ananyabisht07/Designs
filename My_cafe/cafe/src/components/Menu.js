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
                </Container>
                <div className="img13"></div>
                <div className="img14"></div>
                <div className="img15"></div>
                <div className="img16"></div>
                <div className="img17"></div>
                <div className="img18"></div>
                <div className="img19"></div>
                <div className="img20"></div>
                <div className="header-box5" ></div>
                <Container>
                    <MainCourseComponent />                
                </Container>
                <div className="header-box6" ></div>
                <Container>
                    <DessertsComponent />                       
                </Container>
                <Footer />
            </div>
        )
    }
}



export default Menu;