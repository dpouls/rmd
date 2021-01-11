import React from "react";
import "./Landing.scss";
import logo from "../../assets/rmd-logo.png";
import { withRouter } from 'react-router-dom';

const Landing = (props) => {
  return (
    <div className="landing-page">
      <img id="landing-logo" src={logo} alt="logo" />
      <section id='intro-text'>Custom displays, boxes, backdrops, and pedestals by Marv Poulson.</section>
      <button className="nav-button" onClick={() => props.history.push('/Gallery')}>Gallery</button>
      <button className="nav-button" onClick={() => props.history.push('/Shop')}>Shop</button>
      <button className="nav-button" onClick={() => props.history.push('/Contact')}>Contact</button>
    </div>
  );
};

export default withRouter(Landing);
