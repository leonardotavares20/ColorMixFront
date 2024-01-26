import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div } from "./style";
import { Input } from "../../UI/Input/Input";
import { ButtonBlue } from "../../UI/Button/Buttons";

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const formatedTerm = searchTerm.replace(/\s+/g, "-");
      navigate(`/search/${formatedTerm}`);
    }
  };

  return (
    <Div>
      <Input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="O que você procura?"
      />
      <ButtonBlue onClick={handleSearch}>Procurar</ButtonBlue>
    </Div>
  );
};

export default SearchProduct;
