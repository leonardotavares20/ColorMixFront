import { useState, useEffect } from "react";
import Carrousel from "../../Carrousel/Carrousel";
import Grid from "../../Grid/Grid";
import useHttp from "../../../hooks/useHttp";
import { CentralButton } from "./style";
import { FaPlus } from "react-icons/fa6";

const ContentMainHome = () => {
  const [response, setResponse] = useState([]);
  const [store, setStore] = useState(
    JSON.parse(localStorage.getItem("cartSantaRita")) || {
      cart: [],
      subtotal: 0,
    }
  );
  const [number, setNumber] = useState(0);
  const [maxItems, setMaxItems] = useState(false);

  const { sendRequest: fetchItems, isLoading } = useHttp();

  const getItems = (data) => {
    setNumber(data.length);
    setResponse(data);
  };

  const fetchNewItems = async () => {
    try {
      const fetchUrl = `${
        import.meta.env.VITE_REACT_APP_STRAPI_URL
      }/items?_start=${response.length}&_limit=8`;

      const fetchResponse = await fetch(fetchUrl);

      const data = await fetchResponse.json();

      if (data.length === 0) {
        setMaxItems(true);
      }

      setResponse((prevData) => {
        return [...prevData, ...data];
      });
    } catch (error) {
      console.error("Falha na requisição:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(store));
    fetchItems(
      `${import.meta.env.VITE_REACT_APP_STRAPI_URL}/items?_start=0
      &_limit=8`,
      getItems
    );
  }, [store, fetchItems]);

  return (
    <>
      <Grid items={response} />
      <CentralButton>
        {maxItems && <p>Maximo de items em destaque!</p>}
        {!maxItems && (
          <button onClick={fetchNewItems}>
            <FaPlus size={13} /> Carregar Mais
          </button>
        )}
      </CentralButton>
    </>
  );
};

export default ContentMainHome;
