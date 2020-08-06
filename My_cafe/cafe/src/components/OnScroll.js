import React, { Component } from 'react'
import ContactForm from './ContactForm';
import Footer from './Footer';

class OnScroll extends Component{
    componentDidMount(){
        window.test();
    }
    render(){
        return(
            <div>
                <h2 className="title">Scroll to see the magic..</h2>
                <section className="background-img"></section>
                
                    <div className="layer">
                        <div className="container " >
                            <h2 className="shift text-center">Contact Us</h2>
                            <p className="text-center">
                            Send us a message and we’ll get back to you as soon as possible. You can also reach us by phone at (212) 683-2929.
                            Looking forward to hearing from you.</p>
                        </div>
                        <div>
                            <ContactForm />

                        </div>
                        <Footer />
                    </div>
                    
                </div>
            
        )
    }
}

export default OnScroll;


// .background-img {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100vh;
//     background: url(/img/bg8.png);
//     background-attachment: fixed;
//     clip-path:  circle(0px at center);
//   }
  
//   .layer{
//     position: relative;
//     margin-top: 200vh;
//     background: linear-gradient( #064052,  #5b8186) ;
//     padding: 100px;
//   }
  
//   .layer h2{
//     color: antiquewhite;
//     font-size: 3em;
//     font-weight: bolder;
//     margin-bottom: 1em;
//     text-shadow:2px 2px 4px #928b8b  ;
//   }
  
  
//   .layer p{
//     color: antiquewhite;
//     font-size: 17px;
//   }
  
//   .title{
//     position: relative;
//     top: 250px;
//     z-index: 1;
//     text-align: center;
//     font-size: 3em;
//     width: 100%;
//     color: rgb(92, 100, 107);
//     font-weight: bolder;
//   }