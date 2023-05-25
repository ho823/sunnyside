import orange from '../../assets/images/orange.jpg'

import './Header.scss';


function Header() {
    return (
      <div id="header">
        <h1 id="title-header">We are creatives</h1>
        <span id="arrow">↓</span>
        <img id="img-header" src={orange} alt="orange" />
      </div>

    );
  }
  
  export default Header;
  