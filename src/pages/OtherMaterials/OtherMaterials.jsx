import { useEffect, useState } from "react";
import PaginatedItems from "../../components/Pagination/Pagination";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import MainCategories from "../../components/Categories/MainCategories/MainCategories";
import useHttp from "../../hooks/useHttp";

const OtherMaterials = () => {
  const { id } = useParams();
  const [otherCategories, setOtherCaregories] = useState([]);
  const [nameCategorie, setNameCategorie] = useState("");

  const { sendRequest: fetchOtherMaterials, isLoading } = useHttp();

  const getOtherMaterials = (data) => {
    setOtherCaregories(data.items);
    setNameCategorie(data.name);
  };

  useEffect(() => {
    fetchOtherMaterials(
      `${import.meta.env.VITE_REACT_APP_STRAPI_URL}/other-materials/${id}`,
      getOtherMaterials
    );
  }, []);

  return (
    <>
      <PaginatedItems
        products={otherCategories}
        name={nameCategorie}
        itemsPerPage={4}
      />
      <Footer />
    </>
  );
};

export default OtherMaterials;
