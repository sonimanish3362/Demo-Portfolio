import React, { useRef, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.svg"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {

  const [menu , setMenu] = useState("home");
  const menuRef = useRef();
 

  const openmenu = () =>{
    menuRef.current.style.right = "0";
  }
  const closemenu = () => {
    menuRef.current.style.right = "-390px"
  }
  return (
    <div className='navbar'>
    <h2>MANISH SONI </h2>
        {/* <img src={logo} alt="logo" /> */}
        <img src={menu_open} onClick={openmenu} alt=""  className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closemenu} alt="" className='nav-mob-close' />
            <li><AnchorLink className="anchorlink" offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className="anchorlink" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu === "about"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className="anchorlink" offset={50} href="#services"><p onClick={()=>setMenu("services")}>Service</p></AnchorLink>{menu === "services"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className="anchorlink" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfoli</p></AnchorLink>{menu === "work"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className="anchorlink" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchorlink" offset={50} href="#contact">Connect With</AnchorLink></div>
    </div>
  )
}

export default Navbar 