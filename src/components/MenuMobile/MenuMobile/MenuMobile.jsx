import React from "react";
import { Menu } from "./style";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "../../../data/SocialMedia";

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
          <a href={Instagram.link} target="_blank">
            <img src={Instagram.img} alt={Instagram.alt} />
          </a>
          <a className="facebook" href={Facebook.link} target="_blank">
            <img src={Facebook.img} alt={Facebook.alt} />
          </a>
        </div>
      </div>
    </Menu>
  );
};

export default MenuMobile;
