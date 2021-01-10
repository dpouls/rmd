import React from "react";
import "./Landing.scss";
import logo from "../../assets/mtnlogotemp.png";
import { withRouter } from 'react-router-dom';

const Landing = (props) => {
  return (
    <div className="landing-page">
      <img id="landing-logo" src={logo} alt="logo" />
      <button className="nav-button" onClick={() => props.history.push('/Gallery')}>Gallery</button>
      <button className="nav-button" onClick={() => props.history.push('/Shop')}>Shop</button>
      <button className="nav-button" onClick={() => props.history.push('/Contact')}>Contact</button>
    </div>
  );
};

export default withRouter(Landing);
