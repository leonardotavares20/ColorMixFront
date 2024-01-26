import { FaWhatsapp } from "react-icons/fa";
import { DivIndustrialLineItem } from "./style";
import { ButtonTransparent } from "../../../UI/Button/Buttons";

const IndustrialLineItem = (props) => {
  const { name, image } = props;

  return (
    <>
      <DivIndustrialLineItem>
        <img src={image} alt="Texto de exemplo" />
        <p className="name">{name}</p>
        <ButtonTransparent>
          <FaWhatsapp size={20} /> Falar com um atendente
        </ButtonTransparent>
      </DivIndustrialLineItem>
    </>
  );
};

export default IndustrialLineItem;
