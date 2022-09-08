import "./ItemCard.scss"
import { Link } from "react-router-dom"

const ItemCard = ({id, name, address, city, country, contactName, contactEmail, contactPhone}) => {
    return (
        <Link to={`/warehouses/${id}`}>
            <div className="card">
                <div className="card__info">
                    <div className="card__info--side">
                        <span className="card__info--label">Warehouse</span>
                        <span className="card__info--span">{name}</span>
                        <span className="card__info--label">Address</span>
                        <span className="card__info--span">{address}{city}{country}</span>
                    </div>
                    <div className="card__info--side">
                        <span className="card__info--label">Contact Name</span>
                        <span className="card__info--span">{contactName}</span>
                        <span className="card__info--label">Contact Information</span>
                        <span className="card__info--span">{contactPhone}</span>
                        <span className="card__info--span">{contactEmail}</span>
                    </div>
                </div>
                <div className="icons">
                    <img alt="logo"></img>
                    <img alt="logo"></img>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard