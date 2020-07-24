import React, { Component } from 'react'

class OnScroll1 extends Component{
    componentDidMount(){
        window.test();
    }
    render(){
        return(
            <div>
                <h2 className="title">Scroll to see the magic..</h2>
                <section></section>
                <div className="layer">
                    <h2>Fairylights Photography</h2>
                    <p>
                        Fairy lights are usually used as indoor or holiday decorations. Many creative photographers have turned them into a 
                        fantastic way to light their subjects.Fairy lights are unique in that they’re not designed for photography. Because of 
                        this, you have to be extra creative when you use them in your photos.This can lead to a lot of fun photoshoots and new 
                        shooting techniques.<br/><br/>
                        You can use fairy light photography to improve your nighttime photography skills. You’ll get better at lighting your
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
        )
    }
}

export default OnScroll1;