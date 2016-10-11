import React, {Component} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

const Home = () => <div><h2>Home</h2><Links /><br/></div>;
const About = () => <div><h2>About</h2><Links /><br/></div>;
const Contact = () => <div><h2>Contact</h2><Links /><br/></div>;

const Links = () =>
  <nav>
    <Link to='/'>Home</Link><br/>
    <Link to='/contact'>Contact</Link><br/>
    <Link to='/about'>About</Link><br/>
  </nav>

class App extends Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={About}></Route>
        </Router>        
      </div>
    );
  }
}

export default App;
