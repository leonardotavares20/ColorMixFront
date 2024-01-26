import { PiShoppingCartLight } from "react-icons/pi";
import { DivCartItem } from "./styled";
import { Link } from "react-router-dom";
import CartContext from "../../../store/CartContext";
import { useContext } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Menu from "../../MenuMobile/Menu/Menu";

const CartIcon = () => {
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const hamburgerMenu = useMediaQuery("(max-width: 1024px)");

  const numberOfCartItems = items.cart.reduce((curr, acc) => {
    return curr + acc.amount;
  }, 0);

  const cartIconSize = useMediaQuery("(max-width: 500px)");

  return (
    <>
      <DivCartItem>
        <div className="container">
          <Link className="link" to={"/cart"}>
            <button className="button">
              <PiShoppingCartLight size={cartIconSize ? 20 : 28} />
              {numberOfCartItems > 0 && (
                <p className="numberOfCartItems">{numberOfCartItems}</p>
              )}
            </button>
          </Link>
        </div>
        {hamburgerMenu && <Menu />}
      </DivCartItem>
    </>
  );
};

export default CartIcon;
