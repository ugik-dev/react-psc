import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponen = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">PSC 119 Sepintu Sedulang</h3>
            <p className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae mollitia dolore, quos quisquam optio ratione!
            </p>
            <div className="no">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p>+62 81279748967</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/"> Home</Link>
            <Link to="/informasi"> Informasi</Link>
            <Link to="/artikel"> Arikel</Link>
            <Link to="/artikel"> Visi & Misi</Link>
          </Col>
          <Col>
            <h5 className="fw-bold">Temukan kami Play Store</h5>
            <div className="w-100">
              <button className="btn btn-primary btn-lg rounded-5 mb-3 mt-3">
                <i className="fa-brands fa-google-play"></i> Download
              </button>
            </div>
            <p>Nikmati beberapa fitur kami secara mudah dan cepat</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponen;
