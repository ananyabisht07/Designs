import React, { Component } from 'react'


class OnScroll extends Component{
    componentDidMount(){
        window.test();
    }
    render(){
        return(
            <div>
                <h2 className="title">Scroll to see the magic..</h2>
                <section className="background-img"></section>
                
                    <div className=" layer">
                        <div style={{padding:"103px"}}>
                            <h2 className="text-center">Contact Us</h2>
                            <p className="text-center">
                            Send us a message and we’ll get back to you as soon as possible. You can also reach us by phone at (212) 683-2929.
                            Looking forward to hearing from you.</p><br/><br/>
                             <p>   You can use fairy light photography to improve your nighttime photography skills. You’ll get better at lighting your
                                subjects with unusual lights, and give your imagination a chance to roam.

                                Fairy lights come in all shapes and colours. This makes them the perfect backdrops for any kind of subject.You can
                                use them to add a boost of colour to a dull portrait. Or you can fill up negative space in a simple composition.
                                For the best results, use multi-coloured fairy lights. Make sure your subject’s colours or outfit work well with 
                                the lights.This will ensure that your results aren’t overly colourful or loud.
                                White fairy lights are the perfect source of light for glowing photos.<br /><br/>
                                If you’re working with a person, ask them to hold the lights directly in front of their face. This will make their
                                eyes sparkle and make them look flattering.They can also hold the lights from both sides of their face for moodier
                                results.If they hold the lights above or below their face, they won’t look great.Make sure to avoid that. Unless 
                                you have another source of light to get rid of unflattering shadows.
                            </p>
                        </div>
                        
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