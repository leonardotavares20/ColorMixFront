import { useState, useEffect } from "react";
import { ContainerAllCategories, DivCategories, ContainerDiv } from "./style";
import { Link } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import imageBackground from "../../../../assets/allCategories.png";

const OtherCategories = () => {
  const [categories, setCategories] = useState([]);

  const { isLoading, sendRequest: fetchCategoriesMaterials, error } = useHttp();

  const getCategories = (data) => {
    setCategories(data);
  };

  useEffect(() => {
    fetchCategoriesMaterials(
      `${import.meta.env.VITE_REACT_APP_STRAPI_URL}/other-materials`,
      getCategories
    );
  }, [fetchCategoriesMaterials]);

  const numBlocks = 3;
  const sizeBlock = Math.ceil(categories.length / numBlocks);

  const splitInToBlocks = () => {
    const blocks = [];
    for (let i = 0; i < categories.length; i += sizeBlock) {
      blocks.push(categories.slice(i, i + sizeBlock));
    }

    return blocks;
  };

  const blocksOfCategories = splitInToBlocks();

  return (
    <>
      <ContainerAllCategories back={imageBackground} >
        <h1>Outros Materiais</h1>
        <ContainerDiv>
          {blocksOfCategories.map((block, index) => (
            <DivCategories key={index}>
              <ul>
                {block.map((category, i) => (
                  <Link key={i} to={`/other-materials/${category.id}`}>
                    <li className={i === block.length - 1 ? "last-item" : ""}>
                      {category.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </DivCategories>
          ))}
        </ContainerDiv>
      </ContainerAllCategories>
    </>
  );
};

export default OtherCategories;
