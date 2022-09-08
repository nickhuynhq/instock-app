import "./ItemCard.scss"
import { Link, useNavigate } from "react-router-dom"
import editLogo from "../../assets/icons/edit-24px.svg"
import deleteLogo from "../../assets/icons/delete_outline-24px.svg"


const ItemCard = ({id, name, address, city, country, contactName, contactEmail, contactPhone}) => {
    let navigate = useNavigate()
    const handleEditClick = (id) => {
        navigate(`/warehouses/${id}/edit`)
    }

    const handleDeleteClick = (id) => {
        navigate(`/warehouses/${id}/delete`)
    }

    return (
        <main className="card__holder">
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
                </div>
            </Link>
            <div className="icons">
                <img alt="edit logo" src={editLogo} onClick={()=>{handleEditClick(id)}}></img>
                <img alt="delete logo" src={deleteLogo} onClick={()=>{handleDeleteClick(id)}}></img>
            </div>
        </main>
    )
}

export default ItemCard