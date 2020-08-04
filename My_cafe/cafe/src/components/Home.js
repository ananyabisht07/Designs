import React, { Component } from 'react'
import Slider from './Slider'
import CardsGroup from './CardsGroup'
import { Container, Image } from 'react-bootstrap'
import "aos/dist/aos.css"
import Aos from 'aos'

class Home extends Component{
    componentDidMount(){
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

                <Container fluid  style={{marginTop:"7em", position:"relative"}} className="containder-style" >
                    <div className="row justify-content-center" >
                        <div className=" para col-12 col-lg-5 text-center mx-auto ml-auto my-auto text-style1" 
                             style={{marginTop:"3em",}} >
                            <h2 data-aos="fade-right" className="headings"> Be the change</h2>
                            <div data-aos="fade-right" className="seperator "> </div>
                            <p data-aos="fade-left" >
                                Brotherhood global foundation Trust the voice of a common man and it stands for the hunger and for poor 
                                persons rehabilitation. It helps society become a ray of hope for people in need. We Choose a cause that 
                                is close to your heart I:e all-natural calamities & nation crises and join hands with millions of donors 
                                like you who aim to make this world a better place.
                            </p>
                        </div>   
                        <div className=" para col-12 col-lg-7 text-center " style={{marginTop:"30px"}} >
                            <Image className="img-animation" src="img/16.jpg" alt="img" width="660" height="550" />                        
                        </div>     
                    </div>
                </Container>

                <Container fluid  style={{marginTop:"9em",}} className="containder-style">
                    <div className="row" >
                        <div className=" para col-12 col-lg-6 text-center mx-auto ml-auto " >
                            <Image className="img-animation"  src="img/22.jpg" alt="img" width="450" height="600" />                        
                        </div> 
                        <div className=" para col-12 col-lg-6 text-center mx-auto ml-auto text-style2"style={{marginTop:"5em",}} >
                            <h2 data-aos="fade-right" className="headings">Child Welfare</h2>
                            <div data-aos="fade-right" className="seperator "> </div>
                            <p data-aos="fade-left" style={{marginTop:30}}>
                                Our major work based on Child Education, Child health, Save Girl Child, Girl Education, Women health care
                                 and education, Employment, Training, poor rehabilitation, Food & Nutrition, plantation, Serving old 
                                 orphan people, public awareness etc.
                            </p>
                        </div>       
                    </div>
                </Container>

                <Container fluid  style={{marginTop:"9em",}} className="containder-style">
                    <div className="row" >
                         
                        <div className=" para col-12 col-lg-5 text-center mx-auto ml-auto text-style3"style={{marginTop:"5em",}} >
                            <h2 data-aos="fade-leftt" className="headings">HOST YOUR NEXT EVENT</h2>
                            <div data-aos="fade-left" className="seperator "> </div>
                            <p data-aos="fade-left" style={{marginTop:30}}>
                                ilili specializes in Private Parties, Corporate and Press Events, Weddings and other celebrations for groups
                                from 5 to 500. We feature four private event spaces perfect for any occasion, as well as the option to book
                                the entire restaurant. Menus range from passed hors d'oeuvres and cocktails to our diverse shared menus for
                                seated dinners. 
                            </p>
                        </div>  
                        <div className=" para col-12 col-lg-7 text-center mx-auto ml-auto " >
                            <Image className="img-animation"  src="img/18.jpg" alt="img" width="600" height="600" />                        
                        </div>     
                    </div>
                </Container>

                <Container fluid  style={{marginTop:"9em",}} className="containder-style">
                    <div className="row" >
                        <div className=" para col-12 col-lg-7 text-center mx-auto ml-auto" >
                            <Image className="img-animation" src="img/21.jpg" alt="img" width="550" height="500" />                        
                        </div>
                        <div className=" para col-12 col-lg-5 text-center mx-auto ml-auto text-style4"style={{marginTop:"5em",}} >
                            <h2 data-aos="fade-leftt" className="headings">CATERING TO YOU</h2>
                            <div data-aos="fade-left" className="seperator "> </div>
                            <p data-aos="fade-left" style={{marginTop:"10px"}}>
                                Whether you are looking for a special lunch to reward your team for its hard work, or to impress an important 
                                client with a perfect dinner in your home, ilili can cater events from 5 to 500 guests. 
                            </p>
                        </div>  
                             
                    </div>
                </Container>

                <div style={{marginTop:"10em"}}>
                    <CardsGroup />
                </div>
                
            </div>
        )
    }
}

export default Home;