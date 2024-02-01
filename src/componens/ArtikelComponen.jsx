import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Route, useNavigate } from "react-router-dom";

const ArtikelComponen = ({ data }) => {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  function truncateString(str, maxLength) {
    str = str.replace(/<[^>]*>/g, "");
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "..";
    } else {
      return str;
    }
  }

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/artikel/${data.slug}`);
  };

  return (
    <Col onClick={handleCardClick} key={data.id}>
      <img
        src={apiUrl + "/storage/upload/content/" + data.sampul}
        alt="unpslh"
        className="w-100 mb-5 rounded-top-4"
      ></img>

      <h5 className="mb-5 px-3">{data.judul}</h5>
      <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
        <p className="m-0 text-secondary fw-bold">
          {/* {truncateString(data.content, 50)} */}
        </p>
      </div>
    </Col>
    // <Col key={data.id} xl="4" lg="4" md="6" sm="12" className="">
    //   <Card onClick={handleCardClick} className="w-100 mb-3">
    //     <Card.Img
    //       variant="top"
    //       src={apiUrl + "/storage/upload/content/" + data.sampul}
    //     />
    //     <Card.Body>
    //       <Card.Title>{data.judul}</Card.Title>
    //       <Card.Text>{truncateString(data.content, 50)}</Card.Text>
    //     </Card.Body>
    //   </Card>
    // </Col>
  );
};

export default ArtikelComponen;
