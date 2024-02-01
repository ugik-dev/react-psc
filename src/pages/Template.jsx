import { Container, Row, Col } from "react-bootstrap";

const Template = ({ title, desc_title, children }) => {
  return (
    <div className="pages section-1 text-center w-100">
      <Container>
        <Row>
          <Col>
            <h1>{title}</h1>
            <p>{desc_title}</p>
          </Col>
        </Row>
        {children}
      </Container>
    </div>
  );
};

export default Template;
