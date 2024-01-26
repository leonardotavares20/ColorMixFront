import { Routes, Route, useLocation } from "react-router-dom";
import MainCategories from "../components/Categories/MainCategories/MainCategories";
import NavBar from "../components/Header/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import PageCart from "../pages/Cart/Cart";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import OtherMaterials from "../pages/OtherMaterials/OtherMaterials";
import SearchProdutPage from "../pages/SearchProduct/SearchProdutPage";
import MainCategoriesPage from "../pages/MainCategories/MainCategories";

const AppRoutes = () => {
  const location = useLocation();
  const isNotMainCategoriesPage =
    !location.pathname.startsWith("/main-category/");

  return (
    <>
      <NavBar />
      {/* {isNotMainCategoriesPage && <MainCategories />} */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/other-materials/:id" element={<OtherMaterials />} />
        <Route path="/main-category/:id" element={<MainCategoriesPage />} />
        <Route path="/search/:searchTerm" element={<SearchProdutPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes> */}
      {/* <Footer /> */}
    </>
  );
};

export default AppRoutes;
