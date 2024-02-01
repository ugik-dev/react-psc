import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import React, { useState, useEffect } from "react";

import { kelasTerbaru } from "../data/index";
import { useNavigate } from "react-router-dom";
import ArtikelComponen from "../componens/ArtikelComponen";

const HomePage = () => {
  const [artikels, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        var url = apiUrl + "/api/content";
        const response = await fetch(url); // Use apiUrl variable here
        const jsonData = await response.json();

        if (jsonData.error === false) {
          setData(jsonData.data);
          console.log(jsonData.data);
        } else {
          console.error("Error fetching data:", jsonData.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box">
            <Col lg="6">
              <h1 className="mb-4">Public Safe Center</h1>
              <p className="mb-4">
                Terwujudnya Penanggulangan Masalah Kegawatdaruratan Dan Bencana
                di Kota Sungailiat Dengan Mengoptimalkan Sistem Pelayanan
                Terpadu, Efektif Dan Efisien
              </p>
              <button
                onClick={() => navigate("/kontak")}
                className="btn  btn-outline-primary btn-lg rounded-4 me-2 mb-xs-0 mb-2"
              >
                Download Play Store
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="section-1 w-100 min-vh-100">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="fw-bold">Kilas Info</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati voluptatum quas, quae minima molestiae error alias
                inventore autem porro nemo.
              </p>
            </Col>
          </Row>
          <Row>
            {artikels.map((data) => {
              return (
                <ArtikelComponen data={data} key={data.id}></ArtikelComponen>
              );
            })}
            <Col></Col>
          </Row>
          <Row>
            <Col className="text-center">
              <button
                onClick={() => {
                  navigate("/artikel");
                }}
                className="btn btn-success rounded-5 btn-lg"
              >
                Lihat Semua Informasi
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
