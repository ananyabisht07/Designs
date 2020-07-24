import React,{Component} from 'react'

class Bg extends Component{
    componentDidMount(){
        window.test();
    }
    render(){
        return(
            <section className="bg-style">
                <img src="img/bg.jpg" id="bg"  alt="bg" />
                <img src="img/moon.png" id="moon" alt="moon" />
                <img src="img/mountain.png" id="mountain" alt="mountain" />
                <img src="img/road.png" id="road" alt="road" />
                <h2 id="text">Moon Light</h2>
            </section>
        )
    }
}

export default Bg;