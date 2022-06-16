import React from "react";
import "./style.css";

function Table() {
  return (
    <div className="container ">
      <div className="table fw-bolder">
        <div className="row table-head  p-2 m-1">
          <div className="col-1">№</div>
          <div className="col-6">Country</div>
          <div className="col-5">Total Confirmed</div>
        </div>
        <div className="row table-data p-2 m-1">
          <div className="col-1">1</div>
          <div className="col-6">Albania</div>
          <div className="col-5">66275</div>
        </div>
        <div className="row table-data p-2 m-1">
          <div className="col-1">2</div>
          <div className="col-6">Albania</div>
          <div className="col-5">66275</div>
        </div>
        <div className="row table-data p-2 m-1">
          <div className="col-1">3</div>
          <div className="col-6">Albania</div>
          <div className="col-5">66275</div>
        </div>
      </div>
    </div>
  );
}

export default Table;
