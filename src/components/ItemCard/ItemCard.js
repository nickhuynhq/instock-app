import "./ItemCard.scss";
import { Link, useNavigate } from "react-router-dom";
import editLogo from "../../assets/icons/edit-24px.svg";
import deleteLogo from "../../assets/icons/delete_outline-24px.svg";

const ItemCard = ({
  id,
  name,
  address,
  city,
  country,
  contactName,
  contactEmail,
  contactPhone,
}) => { 
  let navigate = useNavigate();
  const handleEditClick = (id) => {
    navigate(`/warehouses/${id}/edit`);
  };

  const handleDeleteClick = (id) => {
    navigate(`/warehouses/${id}/delete`);
  };

  return (
    <>
      {/* mobile */}
      <main className="card__holder mobile">
        <Link to={`/warehouses/${id}`}>
          <div className="card">
            <div className="card__info">
              <div className="card__info--side">
                <span className="card__info--label">WAREHOUSE</span>
                <span className="card__info--span ware-name">{name}</span>
                <span className="card__info--label">ADDRESS</span>
                <div className="card__info--span left">
                  <span className="left__span">{address}&nbsp;</span>
                  <span className="left__span">{city}&nbsp;</span>
                  <span className="left__span">{country}</span>
                </div>
              </div>
              <div className="card__info--side">
                <span className="card__info--label">CONTACT NAME</span>
                <span className="card__info--span">{contactName}</span>
                <div className="contact-info__holder">
                  <span className="card__info--label">CONTACT INFORMATION</span>
                  <span className="card__info--span">{contactPhone}</span>
                  <span className="card__info--span">{contactEmail}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="item-icons">
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
      </main>
      {/* tablet and desktop */}
      <div className="tablet__holder">
        <div className="section">
          <Link to={`/warehouses/${id}`}>
            <span className="tablet__span ware-name">{name}</span>
          </Link>
        </div>
        <div className="address__holder section">
          <span className="tablet__span">{address}&nbsp;</span>
          <span className="tablet__span">{city}&nbsp;</span>
          <span className="tablet__span">{country}</span>
        </div>
        <div className="section">
          <span className="tablet__span">{contactName}</span>
        </div>
        <div className="contact__holder section">
          <span className="tablet__span">{contactPhone}</span>
          <span className="tablet__span">{contactEmail}</span>
        </div>
        <div className="image__holder section">
          <img alt="delete logo" src={deleteLogo} onClick={() => {handleDeleteClick(id)}}></img>
          <img alt="edit logo" src={editLogo} onClick={() => {handleEditClick(id)}}></img>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
