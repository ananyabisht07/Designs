import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center" style={{marginTop:"50px", marginBottom:"50px"}}>             
                <div className="col-4  col-sm-6 text-left">
                    <h5>Navigation</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-6 text-center">
                <img src="img/3.png" width="300px" height="160px" alt="ETERNITY" />
                    <p>All of the operational models are based on constantly escalating happy smiles through healthy teamwork and our
                     rigorous effort towards service to our society.</p>
                </div>
                
            </div>
        </div>
        <div className="row justify-content-center box" >             
                <div className="col col-md-6 col-auto text-center " style={{marginTop:"20px"}}>
                    <p>© Copyright 2018 Eternity</p>
                </div>
                <div className="col col-md-6" style={{marginTop:"20px"}}>
                    <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>  &nbsp;
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>  &nbsp;
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>  &nbsp;
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>  &nbsp;
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>  &nbsp;
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
                
        </div>
    </div>
    )
}

export default Footer;