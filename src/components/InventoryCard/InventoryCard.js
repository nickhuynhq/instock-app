import "./InventoryCard.scss";
import { Link, useNavigate } from "react-router-dom";
import editLogo from "../../assets/icons/edit-24px.svg";
import deleteLogo from "../../assets/icons/delete_outline-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";

const InventoryCard = ({
  id,
  itemName,
  category,
  status,
  quantity,
  warehouseName,
}) => {
  let navigate = useNavigate();
  const handleEditClick = (id) => {
    navigate(`/inventory/${id}/edit`);
  };

  const handleDeleteClick = (id) => {
    navigate(`/inventory/${id}/delete`);
  };

  return (
    <div className="box">
      <Link to={`/inventory/${id}`}>
        <div className="box__info">
          <div className="box__info-left">
            <div className="box__info-wrap">
              <span className="box__info-wrap--label">Inventory Item</span>
              <span className="box__info-wrap--blue">
                {itemName}
                <img
                  className="box__info-wrap--arrow"
                  src={chevron}
                  alt="arrow"
                />
              </span>
            </div>
            <div className="box__info-wrap">
              <span className="box__info-wrap--label">Category</span>
              <span className="box__info-wrap--span">{category}</span>
            </div>
          </div>
          <div className="box__info-right">
            <div className="box__info-wrap">
              <span className="box__info-wrap--label">Status</span>
              <span
                className={
                  status === "In Stock"
                    ? "box__info-wrap--in-stock"
                    : "box__info-wrap--out-of-stock"
                }
              >
                {status}
              </span>
            </div>
            <div className="box__info-wrap">
              <span className="box__info-wrap--label">QTY</span>
              <span className="box__info-wrap--span">{quantity}</span>
            </div>
            <div className="box__info-wrap">
              <span className="box__info-wrap--label">Warehouse</span>
              <span className="box__info-wrap--span">{warehouseName}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="icons">
        <img
          alt="delete logo"
          src={deleteLogo}
          onClick={() => {
            handleDeleteClick(id);
          }}
        ></img>
        <img
          alt="edit logo"
          src={editLogo}
          onClick={() => {
            handleEditClick(id);
          }}
        ></img>
      </div>
    </div>
  );
};

export default InventoryCard;
