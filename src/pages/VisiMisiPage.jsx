import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, json } from "react-router-dom";
import Template from "./Template";

const VisiMisiPage = () => {
  return (
    <Template
      title={"Visi & Misi"}
      desc_title={"PSC 119 Sepintu Sedulang \n Kabupaten Bangka"}
    >
      {/* <Row> */}
      {/* <Col> */}
      <img
        className="mb-5"
        src="./src/logo.png"
        style={{ maxWidth: "129px", height: "150px" }}
      ></img>
      <div className="col-md-12">
        <h3 className="text-center">VISI :</h3>
        <h4 className="text-center">
          TERWUJUDNYA PENANGGULANGAN MASALAH KEGAWATDARURATAN DAN BENCANA DI
          KOTA SUNGAILIAT DENGAN MENGOPTIMALKAN SISTEM PELAYANAN TERPADU,
          EFEKTIF DAN EFISIEN
        </h4>
        <br />
        <h3 className="text-center">MISI :</h3>
        <ul>
          <h4>
            <li>
              Menggerakkan upaya penanggulangan yang lebih nernuansa pencegahan,
              kesiapsiagaan dari tanggap darurat sehari-hari maupun tanggap
              darurat bencana.
            </li>
            <li>
              Mendorong kemandirian masyarakat untuk lebih akrab dan tanggap
              pada penanganan terhadap kejadian kegawatdaruratan sehari-hari
              maupun bencana.
            </li>
            <li>
              Meningkatkan pelayanan kesehatan kegawatdaruratan dan bencana yang
              bermutu, merata, terjangkau dan profesional.
            </li>
            <li>
              Memelihara dan meningkatkan kesehatan individu, keluarga, kelompok
              dan masyarakat beserta lingkungannya melalui upaya pemeliharaan
              kesehatan yang mandiri.
            </li>
            <li>Meningkatkan kemampuan SDM secara profesional</li>
          </h4>
        </ul>
      </div>
      {/* </Col> */}
      {/* </Row> */}
      <Outlet />
    </Template>
  );
};

export default VisiMisiPage;
