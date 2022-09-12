import errorIcon from "../../assets/icons/error-24px.svg";
import "./FormRequiredMessage.scss";


const FormRequiredMessage = () => {
  return (
    <div className="required-message">
        <img className="required-message__icon" src={errorIcon} alt="error icon"></img>
        <p className="required-message__text">This field is required</p>
    </div>
  )
}

export default FormRequiredMessage