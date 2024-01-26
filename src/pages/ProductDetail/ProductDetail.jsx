import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ProductDetails from "../../components/Products/ProductDetails/ProductDetails";
import Footer from "../../components/Footer/Footer";
import useHttp from "../../hooks/useHttp";
import CartContext from "../../store/CartContext";
import SucessPopUp from "../../components/UI/PopUp/PopUp";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similarItems, setSimilarItems] = useState([]);

  const cartContext = useContext(CartContext);

  const showPopup = cartContext.showPopup;

  const { sendRequest: fetchItem, isLoading } = useHttp();

  const getItem = (data) => {
    const processedProduct = {
      ...data,
      ...(data.image && typeof data.image === "object" ? data.image : {}),
      name: data.name,
    };

    setProduct(processedProduct);
    setSimilarItems(processedProduct.items);
  };

  useEffect(() => {
    fetchItem(
      `${import.meta.env.VITE_REACT_APP_STRAPI_URL}/items/${id}`,
      getItem
    );
  }, []);

  return (
    <>
      {showPopup && <SucessPopUp />}
      <ProductDetails product={product} similarItems={similarItems} />
      <Footer />
    </>
  );
};

export default ProductDetail;
