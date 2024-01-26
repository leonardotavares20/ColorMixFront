import SearchProduct from "../../Products/SearchProduct/SearchProduct";
import { Nav, DivLogo, DivMenu, Wrap, DivCartSocials } from "./style";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg";
import Instagram from "../../../../assets/instagram.svg";
import Facebook from "../../../../assets/facebook.svg";

const NavBar = () => {
  return (
    <>
      <header>
        <Nav>
          <DivLogo>
            <Link to={"/"}>
              <img src={logo} alt="Logo Santa Rita" />
            </Link>
          </DivLogo>
          <DivMenu>
            <div className="menu">
              <div className="linksMenu">
                <menu>
                  <Link to={"/"}>Home</Link>
                  <Link to={"/about-us"}>Sobre</Link>
                  <Link>Contato</Link>
                </menu>
              </div>
            </div>
          </DivMenu>
          <SearchProduct />
          <DivCartSocials>
            <div className="socialLinks">
              <a href="#" target="_blank">
                <img src={Instagram} alt="Instagram da loja Santa Rita" />
              </a>
              <a href="#" target="_blank">
                <img src={Facebook} alt="Facebook da loja Santa Rita" />
              </a>
            </div>
            <CartIcon />
          </DivCartSocials>
        </Nav>
        <Wrap />
      </header>
    </>
  );
};

export default NavBar;
