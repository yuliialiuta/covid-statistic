import React from "react";
import "./style.css";
import HeartImg from "../../pictures/heart.svg";
import DeathImg from "../../pictures/death.svg";
import RecoveredImg from "../../pictures/recovered.svg";
import Country from "../Types/Country";

interface ModalProps {
  country?: Country;
  id: string;
}

const Modal: React.FC<ModalProps> = ({ country, id }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <h5
            className="modal-title fw-bolder mx-auto my-4 fs-2"
            id="modalLabel"
          >
            {country?.Country}
          </h5>

          <div className="modal-body p-1 my-2">
            <div className="row">
              <div className="col-2">
                <img src={HeartImg} alt="Total Confirmed" />
              </div>
              <div className="col-7 fs-5">Total Confirmed:</div>
              <div className="col-3 fs-5">{country?.TotalConfirmed}</div>
            </div>
            <div className="row my-3 ">
              <div className="col-2">
                <img src={DeathImg} alt="Total Confirmed" />
              </div>
              <div className="col-7 fs-5">Total Deaths:</div>
              <div className="col-3 fs-5">{country?.TotalDeaths}</div>
            </div>
            <div className="row my-3">
              <div className="col-2">
                <img src={RecoveredImg} alt="Total Confirmed" />
              </div>
              <div className="col-7 fs-5">Total Recovered:</div>
              <div className="col-3 fs-5">{country?.TotalRecovered}</div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary m-auto rounded-pill px-5 fw-bold"
              data-bs-dismiss="modal"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
