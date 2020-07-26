import React, {Component} from 'react'
import './Functions'
//import { Container } from 'react-bootstrap';



class ParallaxHeader extends Component{
       
    
    render(){
        return(
        
            <div>
                <div className="bird-box " >
                    <div className="logoo"></div>
                    <div className="fore-bird"></div>
                    <div className="back-bird"></div>
                </div>
                <section className="content">
                    <article>
                        <h1>Clothing Store</h1>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
                        dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <div style={{height:"2000px"}}></div>
                    </article>
                </section>
            </div>
        );
    }
}

export default ParallaxHeader;