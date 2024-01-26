import { ContainerGrid, GridDiv } from "./style";
import GridItem from "./GridItem/GridItem";

const Grid = ({ items }) => {
  return (
    <>
      <ContainerGrid>
        <GridDiv>
          {items &&
            items.map((item) => (
              <GridItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={`${import.meta.env.VITE_REACT_APP_STRAPI_URL}${
                  item.image.url
                }`}
                price={item.price}
                alt={item.image.alternativeText}
              />
            ))}
          {items && items.length === 0 && (
            <ContainerGrid>
              <p className="warning">Sem items nessa categoria</p>
            </ContainerGrid>
          )}
        </GridDiv>
      </ContainerGrid>
    </>
  );
};

export default Grid;
