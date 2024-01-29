import { DivItem } from "./style";
import { ButtonGray, ButtonTransparent } from "../../UI/Button/Buttons";
import CartContext from "../../../store/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatterBRL } from "../../Products/ResultsSearchProduct/processTerms/processTermFormat";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const GridItem = (props) => {
  const contextCart = useContext(CartContext);

  const box = useRef();

  const { id, name, image, price, alt } = props;

  const sendToCartHandler = () => {
    contextCart.addItem({
      id,
      name,
      price,
      image,
      amount: 1,
      subtotalProduct: price,
    });
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const animation = gsap.from(".container", {
        duration: 0.3,
        scale: 1,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "eslastic",
        force3D: true,
      });

      ScrollTrigger.create({
        trigger: box.current,
        animation: animation,
      });
    },

    { scope: box }
  );

  const priceFormatter = formatterBRL.format(price);

  return (
    <>
      <DivItem ref={box}>
        <div className="container">
          <Link to={`/product/${id}`}>
            <div className="itemDescription">
              <img src={image} alt={alt} />
              <p className="name">{name}</p>
              <p className="price">{priceFormatter}</p>
            </div>
          </Link>
          <ButtonGray onClick={sendToCartHandler}>Adicionar Item</ButtonGray>
        </div>
      </DivItem>
    </>
  );
};

export default GridItem;
