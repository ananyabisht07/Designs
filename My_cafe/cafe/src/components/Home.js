import React, { Component } from 'react'
import Slider from './Slider'
import CardsGroup from './CardsGroup'
import { Container,} from 'react-bootstrap'
import "aos/dist/aos.css"
import Aos from 'aos'
import Footer from './Footer';
import BookMyTable from './BookMyTable'
import Catering from './Catering'

class Home extends Component{
    componentDidUpdate(){
        Aos.init({
            duration: 1600,
            offset: 400
        })
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div>
                <Slider />
                <div id='scroll' ></div>
                <div  className="text-center head-eternity">
                    <h2>Discover..</h2>
                    <h1>ETERNITY</h1>
                    <h4 style={{color:"#fff"}}>OPENING HOURS</h4>
                    <h6 style={{color:"#fff"}}> MONDAY - FRIDAY 08:00 AM - 23:00 PM</h6>
                </div>
                
                <div className="header-box3">
                    <div className="img7"></div>
                    <div className="img8"></div>
                    <div className="img9"></div>
                    <div className="img10"></div>
                    <div className="img11"></div>
                    <div className="img12"></div>
                </div>

                <Container style={{ marginTop:"2em",marginBottom:"7em"}} className="text-center">
                    <h2 style={{fontFamily:"'Dancing Script', cursive", fontSize:"3em", color:"#bd7c7c"}}>Our Approach</h2>
                    <h4 style={{fontFamily:"PT Serif', serif", fontSize:"37px",fontWeight:"700" , color:"#574541"}}>ALWAYS FRESH</h4>
                </Container>

                <div className="header-box7">
                    <img src="img/collage/1.jpg" alt="img-collage" className="collageImg1 img-animation" />
                    <img src="img/collage/2.jpg" alt="img-collage" className="collageImg2 img-animation" />
                    <img src="img/collage/3.jpeg" alt="img-collage" className="collageImg3 img-animation" />
                    <img src="img/collage/4.jpeg" alt="img-collage" className="collageImg4 img-animation" />
                    <img src="img/collage/5.jpeg" alt="img-collage" className="collageImg5 img-animation" />
                    <img src="img/collage/6.jpeg" alt="img-collage" className="collageImg6 img-animation" />
                    <img src="img/collage/7.jpeg" alt="img-collage" className="collageImg7 img-animation" />
                    <img src="img/collage/8.jpg" alt="img-collage" className="collageImg8 img-animation" />
                    <img src="img/collage/9.jpg" alt="img-collage" className="collageImg9 img-animation" />
                </div>

               
                
                <div className="bg-img4"></div>

                <Container style={{marginTop:"2em"}} className="text-center" >                      
                    <h2  style={{fontFamily:"'Dancing Script', cursive", fontSize:"3em", color:"#bd7c7c"}}>Catering to you</h2>
                    <div  className="seperator "> </div>
                    <p style={{marginTop:30 ,color:"rgb(236, 208, 208)"}}>
                        Whether you are looking for a special lunch to reward your team for its hard work, or to impress an important 
                        client with a perfect dinner in your home, Eternity can cater events from 5 to 500 guests. 
                    </p>
                </Container>

                <div className="container" style={{marginTop:"3em"}}>
                    <Catering />
                </div>

                <div style={{marginTop:"10em"}}>
                    <CardsGroup />
                </div>

                <div className="bg-img1">
                    <h2>Visit Us At Eternity</h2>
                    <h1>ENJOYABLE & COMFORTABLE</h1>    
                </div>

                <BookMyTable />

                

                <Footer />
            </div>
        )
    }
}

export default Home;