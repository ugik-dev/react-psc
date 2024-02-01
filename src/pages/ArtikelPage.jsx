import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, json } from "react-router-dom";
import Template from "./Template";
import ArtikelComponen from "../componens/ArtikelComponen";

const ArtikelPage = () => {
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

  return (
    <Template title={"Artikel"} desc_title={"Dapatkan Informasi Terkini"}>
      <Row>
        {artikels.map((artikel) => {
          return <ArtikelComponen data={artikel} key={artikel.id} />;
        })}
        <h4>Content</h4>
      </Row>
      <Outlet />
    </Template>
  );
};

export default ArtikelPage;
