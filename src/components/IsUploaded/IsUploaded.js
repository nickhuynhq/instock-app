import { Link } from "react-router-dom"
import './IsUploaded.scss';

const IsUploaded = ({modalText, btnText, handleUploadAgain}) => {
  return (
      <div className="upload-modal">
      <div className="upload-modal__content">
          <span className="upload-modal__text">{modalText}</span>
          <div className="upload-modal__buttons">
              <button onClick={handleUploadAgain} className="upload-modal__button upload-modal__button--white">
                  {btnText}
              </button>
              <Link to="/" className="upload-modal__button upload-modal__button--primary">
                  Home
              </Link>
          </div>
      </div>
  </div>
  )
}

export default IsUploaded