import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import SkillsList from './components/SkillsList'
import Card from './components/Card';
import Education from './components/Education';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>  
        <div className="app">
          <Hero resumeObj={resume} />
          <Route
          exact path={'/about'}
          render={({ match }) => <About/>}
          />
          <Route
            exact path={'/'}
            render={({ match }) => <Card resumeObj={resume} />}
          />
          <Route
            exact path={'/💻'}
            render={({ match }) => <SkillsList resumeObj={resume} />}
          />
          <Route
            exact path={'/🎒'}
            render={({ match }) => <Education education={resume.education} />}
          />
          <Route
            exact path={'/📧'}
            render={({ match }) => <Contact info={resume.basics} />}
          />

          <ul className="nav__container">
            <nav className="nav">
              <NavLink to={'about'} className="nav__btn">About</NavLink>
              <NavLink exact to={'.'} className="nav__btn">Experience</NavLink>
              <NavLink to={'💻'} className="nav__btn">Skills</NavLink>
              <NavLink to={'🎒'} className="nav__btn">Education</NavLink>
              <NavLink to={'📧'} className="nav__btn">Contact</NavLink>
            </nav>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;