import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../../store/CartContext";
import { ContainerCart, Title, Container } from "./styled";
import { ButtonGray, ButtonGreen } from "../../UI/Button/Buttons";
import { formatterBRL } from "../../Products/ResultsSearchProduct/processTerms/processTermFormat";
import {
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Page,
  Image,
} from "@react-pdf/renderer";
import useMediaQuery from "../../../hooks/useMediaQuery";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  title: {
    marginBottom: 30,
    fontSize: 15,
    fontWeight: "bold",
  },
  subtotal: {
    fontSize: 15,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 10,
  },
  imageLogo: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  image: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  itemInfo: {
    flexGrow: 1,
  },
  itemName: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 10,
  },
});

const Cart = () => {
  const itemsContext = useContext(CartContext);

  const subtotal = formatterBRL.format(itemsContext.items.subtotal);

  const removeCartHandler = (id) => {
    itemsContext.removeItem(id);
  };

  const addCartHandler = (item) => {
    itemsContext.addItem({ ...item, amount: 1 });
  };

  const tablet = useMediaQuery("(max-width: 1024px)");

  const Item = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} src={item.image} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemDetails}>
          <img src={item.image} alt="" />
          <Text>Quantidade: {item.amount}</Text>
          <Text>Preço unitario: {item.price}</Text>
        </View>
      </View>
    </View>
  );

  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Orçamento</Text>
        {itemsContext.items.cart.map((item, index) => (
          <Item key={index} item={item} />
        ))}
        <Text style={styles.subtotal}>Total: {subtotal}</Text>
      </Page>
    </Document>
  );

  return (
    <>
      <Container>
        <ContainerCart>
          <Title>
            <h1>Carrinho de compras</h1>
          </Title>
          <div className="container">
            {itemsContext.items.cart.length > 0 ? (
              <div className="colums">
                <h2>Descricao do produto</h2>
                <h2>Quantidade</h2>
                <h2>Preço Unitario</h2>
                <h2>Valor total individual</h2>
              </div>
            ) : (
              <p>Seu carrinho está vazio</p>
            )}
            {itemsContext.items.cart.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                amount={item.amount}
                onRemove={removeCartHandler.bind(null, item.id)}
                onAdd={addCartHandler.bind(null, item)}
              />
            ))}
          </div>
          {itemsContext.items.cart.length > 0 ? (
            <div className="subtotalAndButtons">
              <p className="subtotal">
                Subtotal:
                <span className="subtotalSpan">{subtotal}</span>
              </p>
              <div className="buttonsSubtotal">
                <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
                  {({ blob, url, loading, error }) => (
                    <ButtonGray>Gerar PDF</ButtonGray>
                  )}
                </PDFDownloadLink>
                <ButtonGreen>Compartilhar</ButtonGreen>
              </div>
            </div>
          ) : (
            <span></span>
          )}
        </ContainerCart>
      </Container>
    </>
  );
};

export default Cart;
