import { useState } from "react";
import products from "../ProductPage/Products.json";
import ProductCards from "./ProductCards";
import React from "react";
import { Col, Row } from "react-bootstrap";

interface Product {
  name: string;
  price: number;
  image: string;
}

const ProductPage = () => {
  const [productList, setProductList] = useState<Product[]>(products);

  return (
    <div style={{ marginTop: "75px", paddingBottom: "50px"}}>
      <Row className="g-0">
        {productList.map((product, index) => (
          <Col xs={12} sm={6} md={3} lg={3}>
            <ProductCards key={index} product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
