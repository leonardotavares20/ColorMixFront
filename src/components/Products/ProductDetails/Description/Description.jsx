import { ContainerDescription } from "./style";

const Description = (props) => {
  const { image, description } = props;

  return (
    <>
      <ContainerDescription>
        <h2>Descrição do Produto</h2>
        <img src={image} alt="Produto" />
        <h3>Sobre o Produto</h3>
        <p>{description}</p>
      </ContainerDescription>
    </>
  );
};

export default Description;
