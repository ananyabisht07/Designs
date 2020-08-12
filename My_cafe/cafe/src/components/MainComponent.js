import React,{ Component } from 'react';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class MainComponent extends Component{

    render(){

    return (
      <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key}   classNames="page" timeout={300}>
                <Switch>
                    <Route  path="/home" component={Home} />
                    <Route  exact path="/aboutus" component={About} />
                    <Route  exact path="/menu" component={Menu} />
                    <Route  exact path="/contact" component={Contact} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
      </div>
    );
}
}
  
  export default withRouter( MainComponent );
