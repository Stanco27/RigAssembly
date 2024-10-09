import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Calculator, PatchQuestion, Truck } from "react-bootstrap-icons";
import './MainPage.css';

const InfoCards = () => {
  return (
<Row className="main-section g-0">
          <Col xs={12} md={6} lg={4}>
            <Card className="m-5 p-4 card-categories">
              <Card.Title className="card-title">
                Compatibility Checker
              </Card.Title>
              <Card.Text className="card-text">
                Use our compatibility checker to see if all your products are
                compatible.
              </Card.Text>
              <Calculator className="mx-auto card-icons" size={60} />
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="m-5 p-4 card-categories">
              <Card.Title className="card-title">FAQ</Card.Title>
              <Card.Text className="card-text">
                Check out our FAQ if you need a question answered.
              </Card.Text>
              <PatchQuestion className="mx-auto card-icons" size={60} />
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="m-5 p-4 card-categories">
              <Card.Title className="card-title">Free Shipping</Card.Title>
              <Card.Text className="card-text">
                We offer free shipping on orders over 100$.
              </Card.Text>
              <Truck className="mx-auto card-icons" size={60} />
            </Card>
          </Col>
        </Row>
  );
};

export default InfoCards;
