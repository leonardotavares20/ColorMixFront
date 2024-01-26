import { ContainerItem } from "./style";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { formatterBRL } from "../../Products/ResultsSearchProduct/processTerms/processTermFormat";
import useMediaQuery from "../../../hooks/useMediaQuery";

const CartItem = (props) => {
  const { name, price, amount, image, onRemove, onAdd } = props;

  const subTotal = amount * price;

  const priceFormatter = formatterBRL.format(price);

  const subtotalProductFormatter = formatterBRL.format(subTotal);

  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <ContainerItem>
        <div className="productImageName">
          {tablet && (
            <h4 className="descriptionTablet">Descrição do produto</h4>
          )}
          <div className="divImageNameProduct">
            <img src={image} alt="" />
            <p>{name}</p>
          </div>
        </div>
        <div className="amount">
          {tablet && <h4 className="amountTablet">Quantidade</h4>}
          <div className="divAmount">
            <button onClick={onRemove}>
              <CiCircleMinus size={23} />
            </button>
            <p>{amount}</p>
            <button onClick={onAdd}>
              <CiCirclePlus size={23} />
            </button>
          </div>
        </div>
        <div className="price">
          {tablet && <h4>Preço unitário</h4>}
          <p>{priceFormatter}</p>
        </div>
        <div className="subtotalItemPrice">
          {tablet && <h4>Valor total individual</h4>}
          <p>{subtotalProductFormatter}</p>
        </div>
      </ContainerItem>
    </>
  );
};

export default CartItem;
