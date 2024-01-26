import ReactDOM from "react-dom";
import { PopUpContainer } from "./style";
import CartContext from "../../../store/CartContext";
import { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PopUp = () => {
  const cartContext = useContext(CartContext);

  const popup = useRef();

  const showPopup = cartContext.showPopup;

  if (showPopup) {
  }
  useGSAP(
    () => {
      gsap.fromTo(
        popup.current,
        {
          y: 100,
          duration: 1,
        },
        {
          y: 0,
          ease: "power2.out",
        }
      );

      gsap.delayedCall(2, () => {
        gsap.to(popup.current, {
          y: 100,
          duration: 0.5,
          ease: "power2.in",
        });
      });
    },
    { scope: popup }
  );

  return (
    <PopUpContainer ref={popup}>Item Adicionado ao Carrinho!</PopUpContainer>
  );
};

const SucessPopUp = (props) => {
  return (
    <>{ReactDOM.createPortal(<PopUp />, document.getElementById("pop-up"))}</>
  );
};

export default SucessPopUp;
