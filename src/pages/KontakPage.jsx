import React from "react";
import Template from "./Template";

const KontakPage = () => {
  return (
    <Template
      title={"Kontak Kami"}
      desc_title={
        "Bagi masyarakat di Kabupaten Bangka yang membutuhkan layanan ambulans gawat darurat bisa menghubungi kami di:"
      }
    >
      <div className="col-md-12">
        <h3 className="text-justify text-success">
          <span className="glyphicon glyphicon-phone"></span> 119
        </h3>
        <h3 className="text-justify text-success">
          <span className="glyphicon glyphicon-phone-alt"></span> 0717-93766
        </h3>
        <h3 className="text-justify text-success">
          <span className="glyphicon glyphicon-phone"></span> 0853 5745 2918
        </h3>
        <h3 className="text-justify text-success">
          <span className="glyphicon glyphicon-envelope"></span>{" "}
          <a
            href="mailto:spgdt.sepintusedulang@gmail.com?Subject=Kontak%20Kami"
            target="_top"
          >
            spgdt.sepintusedulang@gmail.com
          </a>
        </h3>
        <p>
          <br />
        </p>
        <h3 className="text-justify">Frekuensi Radio</h3>
        <h3 className="text-justify text-success">
          <span className="glyphicon glyphicon-sort-by-attributes-alt"></span>{" "}
          143.000
        </h3>

        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.71812513276!2d106.1169474142254!3d-1.8591308370423703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22f30e8e27f9e5%3A0xe7e8bdb4773b4f33!2sSPGDT+KABUPATEN+BANGKA!5e0!3m2!1sid!2sid!4v1505106890334"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
          />
        </div>
      </div>
    </Template>
  );
};

export default KontakPage;
