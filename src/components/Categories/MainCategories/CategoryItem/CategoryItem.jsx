import { CategoryItemDiv } from "./style";
import CircularProgress from "@mui/material/CircularProgress";

const CategoryItem = (props) => {
  const { name, image, isSelected, alt, isLoading, inHome } = props;

  return (
    <>
      {isLoading && <CircularProgress color="success" />}
      {!isLoading && (
        <CategoryItemDiv inHome={inHome} className={isSelected ? "selected" : ""}>
          <img
            src={`${import.meta.env.VITE_REACT_APP_STRAPI_URL}${image}`}
            alt={alt}
          />
          <p>{name}</p>
        </CategoryItemDiv>
      )}
    </>
  );
};

export default CategoryItem;
