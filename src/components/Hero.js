import React, { Component } from 'react';
import logo from '../logo.svg';
import pfp from '../IMG_7993.jpg';
import Pdf from '../JeanneLockerResume.pdf';

class Hero extends Component {
  render() {
    const { basics } = this.props.resumeObj;
  
    return (
      <div className="hero">
        <img src={pfp} style={{"width":"20vh", "height":"20vh", "border-radius": "50%"}}></img>
        <br></br>
        <h1 className="hero__header">{basics.name}</h1>
        <h4 className="hero__subheader">
        {basics.location.city}
          {/* {basics.location.city} <span role="img" aria-label="Sun">☀️</span> */}
        </h4>

        <p>{basics.summary}</p>
        {
          basics.pdf
          ?
          <p className="hero__text"><a href={Pdf} >PDF version</a> of my resume.</p>
          :
          ''
        }
        <br></br>
        <div className="hero__link-container">
          <a
            href="https://github.com/jlox"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__link"
            style={{'textDecoration': 'none'}}
          >
            made with 
            <img src={logo} className="hero__logo" alt="Made With React Logo"/>
          </a>
        </div>
        <span
          role="img"
          aria-label="Arrow down"
          className="hero__arrow"
        >
          ⬇️
        </span>
      </div>
    );
  }
}

export default Hero;