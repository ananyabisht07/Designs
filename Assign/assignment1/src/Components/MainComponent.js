import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import {  Switch, Route } from 'react-router-dom';
import Offer from './Offer';
import BusinessPg from './BusinessPg';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class MainComponent extends Component{
    render(){
        
        return(
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key}  classNames="page" timeout={300}>
                        <Switch>
                            <Route exact path="/" component={ BusinessPg } />
                            <Route  path="/offer" component={ Offer } />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
                
          
        )
    }
}
export default withRouter(MainComponent);