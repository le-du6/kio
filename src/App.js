import React, {Component} from 'react';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';

const Home = () => <div><h2>Home</h2><Links /><br/></div>;
const About = () => <div><h2>About</h2><Links /><br/></div>;
const Contact = (props) => <div><h2>Contact</h2><Links /><br/></div>;
const Us = () => <div><h2>Us</h2><Links /><br/></div>;

const Links = () => (
  <nav>
    <Link activeClassName='active' to='/'>Home</Link><br/>
    <Link activeClassName='active' to='/contact'>Contact</Link><br/>
    <Link activeClassName='active' to='/about'>About</Link><br/>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Home}>
          </Route>
          <Route path="/contact" component={Contact}>
            <Route path="us" component={Us}></Route>
          </Route>
          <Route path="/about" component={About}></Route>
        </Router>        
      </div>
    );
  }
}

export default App;
