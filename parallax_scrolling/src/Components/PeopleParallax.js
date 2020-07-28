import React,{Component} from 'react'

class PeopleParallax extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="parallax__group hero-container">
                    <div className="parallax__layer sky"></div>
                    <div className="parallax__layer bushes"></div>
                    <div className="parallax__layer water"></div>
                    <div className="parallax__layer people1"></div>
                    <div className="parallax__layer people2"></div>
                    <div className="parallax__layer people3"></div>
                    <div className="parallax__layer hero-text">
    
                        <div className="year-container">
                            <h1>2</h1>
                            <h1>0</h1>
                            <h1>1</h1>
                            <h1>9</h1>
                        </div>
                    </div>
                </div>
                <div className="parallax__group info-container">
                    <img src="img/concert.jpg" alt="Lively and colourful concert" />
                    <div className="text-container">
                        <h2>This is your year.</h2>
                        <p>What would life be if we had no courage to attempt anything?</p>
                        <p>- Vincent Van Gogh</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PeopleParallax;

