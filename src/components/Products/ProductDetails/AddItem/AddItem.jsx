import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { ButtonGray } from "../../../UI/Button/Buttons";
import { ContainerAddItem } from "./style";
import { formatterBRL } from "../../ResultsSearchProduct/processTerms/processTermFormat";

const AddItem = (props) => {
  const {
    name,
    price,
    amount,
    onDecrementAmount,
    onIncrementAmount,
    onSendCart,
  } = props;

  const priceFormation = formatterBRL.format(price);

  return (
    <>
      <ContainerAddItem>
        <div className="gap">
          <h2>{name}</h2>
          <p className="price">{priceFormation}</p>
          <div className="amount">
            <p>Quantidade</p>
            <div className="buttons">
              <button onClick={onDecrementAmount}>
                <CiCircleMinus size={25} />
              </button>
              <p>{amount}</p>
              <button onClick={onIncrementAmount}>
                <CiCirclePlus size={25} />
              </button>
            </div>
          </div>
          <ButtonGray className="buttonGrayAdd" onClick={onSendCart}>
            Adicionar a lista
          </ButtonGray>
        </div>
      </ContainerAddItem>
    </>
  );
};

export default AddItem;
