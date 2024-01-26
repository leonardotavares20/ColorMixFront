import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import MainCategories from "../../components/Categories/MainCategories/MainCategories";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";

const MainCategoriesPage = () => {
  const [idCategorie, setIdCategorie] = useState("");
  const [mainCategoriesProducts, setMainCategoriesProducts] = useState([]);
  const [nameCategorie, setNameCategorie] = useState("");

  const { id } = useParams();

  const { sendRequest: fetchMainCategories, isLoading } = useHttp();

  const getMainCategories = (data) => {
    setMainCategoriesProducts(data.items);
    setNameCategorie(data.name);
  };

  useEffect(() => {
    fetchMainCategories(
      `${import.meta.env.VITE_REACT_APP_STRAPI_URL}/main-categories/${id}`,
      getMainCategories
    );
    setIdCategorie(id);
  }, [id, fetchMainCategories]);

  return (
    <>
      <MainCategories id={idCategorie} />
      <Pagination
        products={mainCategoriesProducts}
        name={nameCategorie}
        itemsPerPage={4}
      />
    </>
  );
};

export default MainCategoriesPage;
