import { ContainerIndustrialCategories, DivCategories } from "./style";
import IndustrialLineItem from "./IndustrialLineItem/IndustrialLineItem";
import rolamento from "../../../../assets/rolamento.png";
import ferramenta from "../../../../assets/ferramenta.png";
import juntas from "../../../../assets/juntas.png";
import valvulas from "../../../../assets/rolamento.png";

const IndustrialLineItems = [
  { url: rolamento, name: "Rolamentos e Mancais" },
  { url: ferramenta, name: "Rolamentos e Mancais" },
  { url: juntas, name: "Rolamentos e Mancais" },
  { url: valvulas, name: "Rolamentos e Mancais" },
];

const IndustrialLine = () => {
  return (
    <>
      <ContainerIndustrialCategories>
        <h2>
          Linha <span>Industrial</span>
        </h2>
        <DivCategories>
          {IndustrialLineItems.map((item, index) => (
            <IndustrialLineItem key={index} name={item.name} image={item.url} />
          ))}
        </DivCategories>
      </ContainerIndustrialCategories>
    </>
  );
};

export default IndustrialLine;
