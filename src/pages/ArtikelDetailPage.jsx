import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, useParams } from "react-router-dom";
import Template from "./Template";
import DOMPurify from "dompurify";

const ArtikelDetailPage = () => {
  const [artikel, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        var url = apiUrl + "/api/content/" + slug;
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
    <Template title={artikel.judul} desc_title={artikel.name_content}>
      <Row>
        <Col
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(artikel.content),
          }}
        ></Col>
      </Row>
      <Outlet />
    </Template>
  );
};

export default ArtikelDetailPage;
