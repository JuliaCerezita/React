import { IoIosCompass } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { IoMdPaperPlane } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import React from 'react';

const Header = () => {
    const element = <header>
    <div className="header0">    
        <div className="align-center logoinsta"><IoLogoInstagram /></div> 
        <img className="logo" src="./img/logo.png" alt="Instagram" />
        <input type="text" name="pesquisa" placeholder="Pesquisa" className="header2"/>
        <div className="header3 gap13">
            <IoMdPaperPlane />
            <div className="gap13 header4">
            <IoIosCompass id="headericon1"/>
            <IoMdHeart id="headericon2" />
            <IoMdPerson id="headericon3" />
            </div>
        </div>
    </div>    
    </header>;
    return element;
}

export default Header;