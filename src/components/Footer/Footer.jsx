import { ContainerFooter, ContainerFooterLinks } from "./style";
import { Link } from "react-router-dom";
import logoFooter from "../../../assets/logoFooter.png";
import instagram from "../../../assets/instagram.png";
import facebook from "../../../assets/facebook.png";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <ContainerFooterLinks>
          <div className="image">
            <img src={logoFooter} alt="Logo da loja Santa Rita" />
          </div>
          <div className="map media">
            <h2>Mapa do site</h2>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about-us"}>Sobre</Link>
              </li>
              <li>
                <Link to={"/"}>Produtos</Link>
              </li>
              <li>
                <Link to={"/"}>Contatos</Link>
              </li>
              <li>
                <Link to={"/"}>Onde estamos</Link>
              </li>
            </ul>
          </div>
          <div className="media">
            <h2>Redes sociais</h2>
            <ul>
              <li className="insta">
                Instagram <img src={instagram} alt="Instagram Santa Rita" />
              </li>
              <li className="face">
                Facebook <img src={facebook} alt="Facebook Santa Rita" />{" "}
              </li>
            </ul>
          </div>
          <div className="media">
            <h2>Fale conosco</h2>
            <ul className="contact">
              <li>(98)9 8608-5358</li>
              <li>@jfmateriaisconst@outlook.com</li>
            </ul>
          </div>
        </ContainerFooterLinks>
        <div className="license">
          <p>@JFConstruções 2022. Todos os direitos reservados - Olá Mundo</p>
        </div>
      </ContainerFooter>
    </>
  );
};

export default Footer;
