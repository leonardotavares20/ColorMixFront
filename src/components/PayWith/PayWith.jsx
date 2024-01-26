import {
  ContainerPayWith,
  ContainerPayMethods,
  ContainerOpeningHours,
} from "./style";
import visa from "../../../assets/visa.png";
import credishop from "../../../assets/credishop.png";
import dinersclub from "../../../assets/dinersclub.png";
import mastercard from "../../../assets/mastercard.png";
import americanexpress from "../../../assets/americanexpress.png";
import clockImage from "../../../assets/ClockCountdown.png";

const PayWithMethodsImages = [
  { url: mastercard, alt: "mastercard" },
  { url: visa, alt: "visa" },
  { url: americanexpress, alt: "americanexpress" },
  { url: credishop, alt: "credishop" },
  { url: dinersclub, alt: "dinersclub" },
]

const PayWith = () => {
  return (
    <>
      <ContainerPayWith>
        <div className="title">
          <h2>Pague com</h2>
        </div>
        <ContainerPayMethods>
          {PayWithMethodsImages.map((image, index) => (
            <img key={index} src={image.url} alt={image.alt} />
          ))}
        </ContainerPayMethods>
        <ContainerOpeningHours>
          <img
            src={clockImage}
            alt="Relogio que representa horario do atendimento"
          />
          Horário de funcionamento: Segunda a sexta: 8h às 18h
        </ContainerOpeningHours>
      </ContainerPayWith>
    </>
  );
};

export default PayWith;
