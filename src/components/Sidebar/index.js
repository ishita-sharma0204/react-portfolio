import "./index.scss";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='default logo' />
        <img className='sub-logo' src={LogoSubtitle} alt='subtitle logo' />
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
        <NavLink
          activeclassname='active'
          className='about-link'
          to='/about'
        >
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
        <NavLink
          activeclassname='active'
          className='portfolio-link'
          to='/portfolio'
        >
          <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
        <NavLink
          activeclassname='active'
          className='contact-link'
          to='/contact'
        >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/ishita-sharma-a18432198/'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color='#4d4d4e'
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/ishita-sharma-a18432198/'
          >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
