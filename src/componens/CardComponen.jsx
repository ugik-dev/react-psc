import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardComponen = ({ data }) => {
  console.log(data);
  return (
    <Col key={data.id}>
      <img
        src={data.image}
        alt="unpslh"
        className="w-100 mb-5 rounded-top-4"
      ></img>
      <div className="start mb-2 px-3">
        <i className={data.star1}></i>
        <i className={data.star2}></i>
        <i className={data.star3}></i>
        <i className={data.star4}></i>
        <i className={data.star5}></i>
      </div>
      <h5 className="mb-5 px-3">{data.title}</h5>
      <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
        <p className="m-0 text-primary fw-bold">Price : {data.price}</p>
        <button className="btn btn-danger rounded-1">{data.buy}</button>
      </div>
    </Col>
  );
};

export default CardComponen;
