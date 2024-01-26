import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PayWith from "../../PayWith/PayWith";
import Grid from "../../Grid/Grid";
import { ContainerTitle, Title } from "./style";
import {
  normalizeSearchTerm,
  processSearchTerms,
  filterItemsSearch,
} from "./processTerms/processTermFormat";
import useHttp from "../../../hooks/useHttp";

const ResultSearchProduct = () => {
  const [items, setItems] = useState([]);

  const { searchTerm } = useParams();

  const { sendRequest: fetchItems } = useHttp();

  const getItems = (data) => {
    setItems(data);
  };

  useEffect(() => {
    fetchItems(`${import.meta.env.VITE_REACT_APP_STRAPI_URL}/items`, getItems);
  }, [fetchItems]);

  const replacedTerm = normalizeSearchTerm(searchTerm);

  const searchTerms = processSearchTerms(replacedTerm);

  const filteredItems = filterItemsSearch(items, searchTerms);

  const term = searchTerm.replace("-", " ");

  return (
    <>
      <ContainerTitle>
        <Title>
          <h1>{`Resultados para "${term}"`}</h1>
        </Title>
      </ContainerTitle>
      <Grid items={filteredItems} />
      <PayWith />
    </>
  );
};

export default ResultSearchProduct;
