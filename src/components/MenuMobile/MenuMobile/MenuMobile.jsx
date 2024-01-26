import React from "react";
import { Menu } from "./style";
import { Link } from "react-router-dom";
import Instagram from "../../../../assets/instagramMobile.svg";
import Facebook from "../../../../assets/facebookMobile.svg";

const MenuMobile = ({ open }) => {
  return (
    <Menu open={open}>
      <div className="containerMenu">
        <div>
          <menu>
            <Link to={"/"}>Home</Link>
            <Link to={"/about-us"}>Sobre</Link>
            <Link>Contato</Link>
          </menu>
        </div>
        <div className="socials">
          <a hre="#" target="_blank">
            <img src={Instagram} alt="Instagram Color Mix" />
          </a>
          <a className="facebook" href="#" target="_blank">
            <img src={Facebook} alt="Facebook Color Mix" />
          </a>
        </div>
      </div>
    </Menu>
  );
};

export default MenuMobile;
