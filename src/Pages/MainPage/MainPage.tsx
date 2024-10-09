import React from "react";
import "./MainPage.css";
import {
  Button,
  Card,
  Carousel,
  CarouselCaption,
  Col,
  Row,
} from "react-bootstrap";
import InfoCards from "./InfoCards";

const MainPage = () => {

  const handleButton = () => {
    window.location.href = "/Products"
  }
  return (
    <>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item className="carousel-inner">
            <img
              className="carousel-image"
              src="https://cdn.wccftech.com/wp-content/uploads/2020/10/AMD-Radeon-RX-6000-Series_Big-Navi-GPU_Graphics-Card_1.png"
            />
            <CarouselCaption className="carousel-text">
              <Button onClick={handleButton} size="lg" className="carousel-button">Shop Now</Button>
            </CarouselCaption>
          </Carousel.Item>
          <Carousel.Item className="carousel-inner">
            <img
              className="carousel-image"
              src="https://wallpapers.com/images/hd/pc-gaming-setup-rgb-4k-ft1ym37yjyb7lp19.jpg"
            />
            <CarouselCaption className="carousel-text">
              <Button onClick={handleButton} size="lg" className="carousel-button">Shop Now</Button>
            </CarouselCaption>
          </Carousel.Item>
        </Carousel>
        <Row className="product-section g-0 text-center">
          <h2 className="mt-4">Categories</h2>
          <Col xs={12} md={6} lg={4}>
            <Card className="m-5 card-product">
              <Card.Title>
                GPUs
              </Card.Title>
              <img src="https://i.pcmag.com/imagery/articles/00Iy7r4lqzdcLM9vUdFIZoN-25..v1628272383.jpg" className="card-image"/>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="m-5 card-product">
              <Card.Title>
                PC Cases
              </Card.Title>
               <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/04/53488723946_7971b1d264_o.jpg" className="card-image"/>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="m-5 card-product">
              <Card.Title>
                Peripherals
              </Card.Title>
              <img src="https://assets2.razerzone.com/images/pnx.assets/fdab6aefb14b0069529d520d95c44d10/razer-gaming-mice-2024-og.webp" className="card-image"/>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="m-5 card-product">
              <Card.Title>
                Monitors
              </Card.Title>
              <img src="https://assets-prd.ignimgs.com/2022/06/12/4k-gaming-monitors-3-1655029442724.jpg?width=1280" className="card-image"/>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="m-5 card-product">
              <Card.Title>
                Power Supplies
              </Card.Title>
              <img src="https://assets-prd.ignimgs.com/2022/06/06/power-supply-2-1654474079565.jpg" className="card-image"/>
            </Card>
          </Col>
        </Row>
        <InfoCards />
      </div>
    </>
  );
};

export default MainPage;
