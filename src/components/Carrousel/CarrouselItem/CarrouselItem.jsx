import { DivCarrouselItem } from "./style";
import { Link } from "react-router-dom";
import { formatterBRL } from "../../Products/ResultsSearchProduct/processTerms/processTermFormat";

const CarrouselItem = (props) => {
  const { id, name, image, price } = props;

  const priceFormatter = formatterBRL.format(price);

  return (
    <>
      <Link to={`/product/${id}`}>
        <DivCarrouselItem>
          <img src={image} alt="Items do carrousel" />
          <div className="priceDiv">
            <p className="name">{name}</p>
            <p className="price">{priceFormatter}</p>
          </div>
        </DivCarrouselItem>
      </Link>
    </>
  );
};

export default CarrouselItem;
