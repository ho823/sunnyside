import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/dataContext";

import './TextPhoto.scss';

function useWindowSize() {
  const [size, setSize] = useState(0);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function TextPhoto({title, text, imgPosition, imgSrc, imgDescription, linkPath, color}) {
  const { theme } = useContext(ThemeContext)
  useWindowSize()
  const isMobile = window.innerWidth < 768 ? 'mobile-position' : imgPosition
    return (
      <section id={`container-txt-photo-${theme}`} className={isMobile}>
        <div id="text-content">
          <h2 className="title">{title}</h2>
          <p className="text"> {text} </p>
          <NavLink to={linkPath}>LEARN MORE <span data-colorlink={color} id="color-bar"/></NavLink>

        </div>
        <div className="container-img">
          <img className="img-text" src={imgSrc} alt={imgDescription} />

        </div>
      </section>

    );
  }
  
  export default TextPhoto;
  