import { useEffect, useState } from "react";
import { MainContentGrid } from "./style";
import CategoryItem from "./CategoryItem/CategoryItem";
import { Link } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";

const MainCategories = ({ id }) => {
  const [categories, setCategories] = useState([]);

  const idToNum = id ? parseInt(id) : null;

  const { isLoading, sendRequest: fetchCategories, error } = useHttp();

  const getCategories = (data) => {
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories(
      `${import.meta.env.VITE_REACT_APP_STRAPI_URL}/main-categories`,
      getCategories
    );
  }, [fetchCategories]);

  return (
    <>
      <section>
        <MainContentGrid>
          {categories.map((category) => (
            <Link
              activeclassname="selected"
              key={category.id}
              to={`/main-category/${category.id}`}
            >
              <CategoryItem
                name={category.name}
                isLoading={isLoading}
                image={category.image.url}
                slug={category.slug}
                isSelected={category.id === idToNum}
                alt={category.image.alternativeText}
              />
            </Link>
          ))}
        </MainContentGrid>
      </section>
    </>
  );
};

export default MainCategories;
