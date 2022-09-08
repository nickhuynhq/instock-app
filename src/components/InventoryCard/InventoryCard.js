import "./InventoryCard.scss";

const InventoryCard = ({
  id,
  itemName,
  category,
  status,
  quantity,
  warehouseName,
}) => {
  return (
    <div className="box">
      <div className="box__info">
        <div className="box__info--left">
          <span className="box__info--label">Inventory Item</span>
          <span className="box__info--blue">{itemName}</span>
          <span className="box__info--label">Category</span>
          <span className="box__info--span">{category}</span>
        </div>
        <div className="box__info--right">
          <span className="box__info--label">Status</span>
          <span className="box__info--green">{status}</span>
          <span className="box__info--label">QTY</span>
          <span className="box__info--span">{quantity}</span>
          <span className="box__info--label">Warehouse</span>
          <span className="box__info--span">{warehouseName}</span>
        </div>
      </div>
      <div className="icons">
        <img alt="logo"></img>
        <img alt="logo"></img>
      </div>
    </div>
  );
};

export default InventoryCard;
