import { useEffect, useState, useContext } from "react";
import ContentMainHome from "../../components/Products/ContentMainHome/ContentMainHome";
import MainCategories from "../../components/Categories/MainCategories/MainCategories";
import Banner from "../../components/Banner/Banner";
import OtherCategories from "../../components/Categories/OtherCategories/OtherCategoriesBlock";
import IndustrialLine from "../../components/Categories/IndustrialLine/IndustrialLine";
import PayWith from "../../components/PayWith/PayWith";
import useHttp from "../../hooks/useHttp";
import CartContext from "../../store/CartContext";
import SucessPopUp from "../../components/UI/PopUp/PopUp";

const Home = () => {
  const [imagesBanners, setImagesBanners] = useState([]);
  const { sendRequest: fetchBanners, isLoading } = useHttp();

  const cartContext = useContext(CartContext);

  const showPopup = cartContext.showPopup;

  const getBanners = (data) => {
    setImagesBanners(data);
  };

  useEffect(() => {
    fetchBanners(
      `${import.meta.env.VITE_REACT_APP_STRAPI_URL}/banner-testes`,
      getBanners
    );
  }, [fetchBanners]);

  return (
    <>
      {showPopup && <SucessPopUp />}
      <Banner images={imagesBanners} isLoading={isLoading} />
      <MainCategories />
      {/* <ContentMainHome /> */}
      {/* <OtherCategories /> */}
      {/* <IndustrialLine /> */}
      {/* <PayWith /> */}
    </>
  );
};

export default Home;
