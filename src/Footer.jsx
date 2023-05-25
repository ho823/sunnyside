import { NavLink } from "react-router-dom";
import { ThemeContext } from "./context/dataContext";
import { useContext } from "react";

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import "./Footer.scss"

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)

    return (
      <section id={`footer-${theme}`}>
        <h4>sunnyside</h4>
        <ul id="summary">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/Projects">Projects</NavLink></li>
        </ul>

        <ul id="social-network">
          <li><FacebookTwoToneIcon fontSize="small" /></li>
          <li><InstagramIcon fontSize="small" /></li>
          <li><TwitterIcon fontSize="small" /></li>
          <li><PinterestIcon fontSize="small" /></li>
        </ul>

        <button id="btn-mode" onClick={() => toggleTheme()} >Changer de mode : {theme === 'light' ? '☀️' : '🌙'}</button>
      </section>
    );
  }
  
  export default Footer;
  