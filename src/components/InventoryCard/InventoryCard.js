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
    // mobile
    <>
      <div className="box">
        
          <div className="box__info">
            <div className="box__info-left">
              <div className="box__info-wrap">
                <span className="box__info-wrap--label">Inventory Item</span>
                <div className="box__info-span">
                  <Link to={`/inventory/${id}`}>
                  <span className="box__info-span--special-blue">
                    {itemName}
                  </span>
                  </Link>
                  <img
                    className="box__info-span--special-arrow"
                    src={chevron}
                    alt="arrow"
                  />
                </div>
              </div>
              <div className="box__info-wrap">
                <span className="box__info-wrap--label">Category</span>
                <span className="box__info-wrap--inventory-name">
                  {category}
                </span>
              </div>
            </div>
            <div className="box__info-right">
              <div className="box__info-wrap">
                <span className="box__info-label">Status</span>
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
                <span className="box__info-wrap--span-warehouse">
                  {warehouseName}
                </span>
              </div>
            </div>
          </div>
        <div className="icons">
          <img
            className="icons__btn"
            alt="delete logo"
            src={deleteLogo}
            onClick={() => {
              handleDeleteClick(id);
            }}
          ></img>
          <img
            className="icons__btn"
            alt="edit logo"
            src={editLogo}
            onClick={() => {
              handleEditClick(id);
            }}
          ></img>
        </div>
      </div>

      {/* tablet & desktop */}

      
        <div className="tablet__info">
          <div className="tablet__info-wrap">
            <div className="tablet__info-span">
              <Link to={`/inventory/${id}`}>
                <span className="tablet__info-span--special-blue">
                  {itemName}
                </span>
              </Link>
              <img
                className="tablet__info-span--special-arrow"
                src={chevron}
                alt="arrow"
              />
            </div>
          </div>
          <div className="tablet__info-wrap">
            <span className="tablet__info-wrap--inventory-name">
              {category}
            </span>
          </div>
          <div className="tablet__info-wrap">
            <span
              className={
                status === "In Stock"
                  ? "tablet__info-wrap--in-stock"
                  : "tablet__info-wrap--out-of-stock"
              }
            >
              {status}
            </span>
          </div>
          <div className="tablet__info-wrap">
            <span className="tablet__info-wrap--span">{quantity}</span>
          </div>
          <div className="tablet__info-wrap">
            <span className="tablet__info-wrap--span-warehouse">
              {warehouseName}
            </span>
          </div>
          <div className="tablet__info-wrap">
            <img
              className="icons__btn"
              alt="delete logo"
              src={deleteLogo}
              onClick={() => {
                handleDeleteClick(id);
              }}
            ></img>
            <img
              className="icons__btn"
              alt="edit logo"
              src={editLogo}
              onClick={() => {
                handleEditClick(id);
              }}
            ></img>
          </div>
        </div>
    </>

    // tablet and desktop
  );
};

export default InventoryCard;
