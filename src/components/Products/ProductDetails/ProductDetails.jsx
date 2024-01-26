import { useState, useContext } from "react";
import CartContext from "../../../store/CartContext";
import { Container, ContainerItem, ContainerImage, Description } from "./style";
import Carrousel from "../../Carrousel/Carrousel";
import AddItem from "./AddItem/AddItem";
import imageBanner from "/assets/bannerFreteGratis.png";

const ProductDetails = ({ product, similarItems }) => {
  const [amount, setAmount] = useState(1);
  const context = useContext(CartContext);

  const functionAddItem = context.addItem;

  const sendItemCartHandler = () => {
    functionAddItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: `${import.meta.env.VITE_REACT_APP_STRAPI_URL}${product.url}`,
      amount: amount,
      subtotalProduct: product.price,
    });
  };

  const decrementeAmountHandler = () => {
    if (amount < 2) {
      return;
    }
    setAmount((prevAmount) => prevAmount - 1);
  };

  const incrementAmountHandler = () => {
    if (amount === 10) {
      return;
    }
    setAmount((prevAmount) => prevAmount + 1);
  };

  return (
    <>
      <Container>
        <ContainerImage>
          <img src={imageBanner} alt="Frete grátis acima de 80R$" />
        </ContainerImage>
        <ContainerItem>
          <h2 className="title">Descrição do Produto</h2>
          <img
            src={`${import.meta.env.VITE_REACT_APP_STRAPI_URL}${product.url}`}
            alt={product.name}
          />
          <div className="descriptionText">
            <h3>Sobre o Produto</h3>
            <p>{product.Description}</p>
          </div>
          <AddItem
            name={product.name}
            price={product.price}
            amount={amount}
            onDecrementAmount={decrementeAmountHandler}
            onIncrementAmount={incrementAmountHandler}
            onSendCart={sendItemCartHandler}
          />
        </ContainerItem>
      </Container>
      <Carrousel title="Produtos Similares" items={similarItems} />
    </>
  );
};

export default ProductDetails;
