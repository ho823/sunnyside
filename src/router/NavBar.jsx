import {
  BrowserRouter as Router,
    NavLink,
    Route,
    Routes
  } from "react-router-dom";
  import Home from "../home/Home";
  import About from "../about/About";
  import Services from "../services/Services";
  import Projects from "../projects/Projects";
  import Contact from "../contact/Contact";

  import { CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu } from "@coreui/react";
  import '@coreui/coreui/dist/css/coreui.min.css'


import './NavBar.scss';


function NavBar() {
  return (
    <Router>
      <nav>
        <ul>
          <li id="home"><NavLink to="/">sunnyside</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <div id="mobile-nav">
          <p id="home-btn"><NavLink to="/">sunnyside</NavLink></p>
          <CDropdown variant="dropdown">
          <CDropdownToggle color="dark" variant="outline" >Dropdown button</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="/about">About</CDropdownItem>
            <CDropdownItem href="/services">Services</CDropdownItem>
            <CDropdownItem href="/projects">Projects</CDropdownItem>
            <CDropdownItem href="/contact">Contact</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>

    </Router>
  );
}

export default NavBar;
