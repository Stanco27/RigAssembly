import React, { useState } from "react";
import "../CompatibilityCheckerPage/CompatibilityChecker.css";
import ScrollWheelContainer from "../../HorizontalScrollWheel/ScrollWheelContainer";
import HorizontalScrollWheel from "../../HorizontalScrollWheel/HorizontalScrollWheel";
import products from "../ProductPage/Products.json";
import { Button, Container } from "react-bootstrap";
import Notification from "../../Notification/Notification";

interface Product {
  name: string;
  price: number;
  image: string;
  category: string;
  compatible: string[];
}

const CompatibilityCheckerPage = () => {
  const [gpu, setGpu] = useState<Product>();
  const [cpu, setCpu] = useState<Product>();
  const [motherboard, setMotherboard] = useState<Product>();
  const [powerSupply, setPowerSupply] = useState<Product>();
  const [incompatible, setIncompatible] = useState<string[]>([]);
  const [notSelected, setNotSelected] = useState<string[]>([]);
  const [complete, setCompleted] = useState<boolean>(false);

  const handleCpu = (newCpu: Product) => {
    setCpu(newCpu);
  };

  const handleGpu = (newGpu: Product) => {
    setGpu(newGpu);
  };

  const handlePowerSupply = (newPowerSupply: Product) => {
    setPowerSupply(newPowerSupply);
  };

  const handleMotherboard = (newMotherboard: Product) => {
    setMotherboard(newMotherboard);
  };

  const handleClose = () => {
    setCompleted(false);
  }

  const handleForm = () => {
    const newIncompatible: string[] = [];
    const newNotSelected: string[] = [];

    if(!cpu) {
      newNotSelected.push("Cpu");
    }

    if(!gpu) {
      newNotSelected.push("Gpu");
    }

    if(!motherboard) {
      newNotSelected.push("Motherboard");
    }

    if(!powerSupply) {
      newNotSelected.push("Power Supply");
    }

    if (cpu && motherboard) {
      if (!motherboard.compatible.includes(cpu.name)) {
        newIncompatible.push(`${cpu.name} is not compatible with ${motherboard.name}`);
        newIncompatible.push("Cpu");
        newIncompatible.push("Motherboard");
      }
    }

    if (gpu && powerSupply) {
      if (!powerSupply.compatible.includes(gpu.name)) {
        newIncompatible.push(`${gpu.name} is not compatible with ${powerSupply.name}`);
        newIncompatible.push("Gpu");
        newIncompatible.push("Power Supply");
      }
    }

    setIncompatible(newIncompatible);
    setNotSelected(newNotSelected);

    if(newIncompatible.length === 0 && newNotSelected.length === 0) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  return (
    <div className="main-container">
      <h1 className="title">Compatibility Checker</h1>
      <hr />
      <h6 className="info">
        Select your options to determine if the products are all compatible.
      </h6>
      {/* CPU */}
      <ScrollWheelContainer name={"CPU"} notSelected={notSelected?.includes("Cpu") || incompatible.includes("Cpu")}>
        {products
          .filter((product) => product.category?.toLowerCase() === "cpu")
          .map((product) => (
            <>
              <HorizontalScrollWheel
                name={
                  product.name.length > 20
                    ? product.name.slice(0, 16) + "..."
                    : product.name
                }
                image={product.image}
                onClick={() => handleCpu(product)}
                checked={cpu && product.name == cpu.name}
              />
            </>
          ))}
      </ScrollWheelContainer>
          {notSelected?.includes("Cpu") &&
            <h6 className="errors">Please select a CPU</h6>
          }
          {incompatible.includes("Cpu") &&
            <h6 className="errors">CPU is not compatible with selected motherboard</h6>
          }
      {/* GPU */}
      <ScrollWheelContainer name={"GPU"} notSelected={notSelected?.includes("Gpu") || incompatible.includes("Gpu")}>
        {products
          .filter((product) => product.category?.toLowerCase() === "gpu")
          .map((product) => (
            <>
              <HorizontalScrollWheel
                name={
                  product.name.length > 20
                    ? product.name.slice(0, 16) + "..."
                    : product.name
                }
                image={product.image}
                onClick={() => handleGpu(product)}
                checked={gpu && product.name == gpu.name}
              />
            </>
          ))}
      </ScrollWheelContainer>
        {notSelected?.includes("Gpu") &&
          <h6 className="errors">Please select a GPU</h6>
        }
        {incompatible.includes("Gpu") &&
          <h6 className="errors">GPU is not compatible with selected power supply</h6>
        }
      {/* Power Supply */}
      <ScrollWheelContainer name={"Power Supply"} notSelected={notSelected?.includes("Power Supply") || incompatible.includes("Power Supply")}>
        {products
          .filter(
            (product) => product.category?.toLowerCase() === "power_supply"
          )
          .map((product) => (
            <>
              <HorizontalScrollWheel
                name={
                  product.name.length > 20
                  ? product.name.slice(0, 16) + "..."
                  : product.name
                }
                image={product.image}
                onClick={() => handlePowerSupply(product)}
                checked={powerSupply && product.name == powerSupply.name}
                />
            </>
          ))}
      </ScrollWheelContainer>
          {notSelected?.includes("Power Supply") &&
              <h6 className="errors">Please select a power supply</h6>
          }
          {incompatible.includes("Power Supply") &&
            <h6 className="errors">Power Supply is not compatible with selected GPU</h6>
          }
      {/* Motherboard */}
      <ScrollWheelContainer name={"Motherboard"} notSelected={notSelected?.includes("Motherboard") || incompatible.includes("Motherboard")}>
        {products
          .filter(
            (product) => product.category?.toLowerCase() === "motherboard"
          )
          .map((product) => (
            <>
              <HorizontalScrollWheel
                name={
                  product.name.length > 20
                  ? product.name.slice(0, 16) + "..."
                  : product.name
                }
                image={product.image}
                onClick={() => handleMotherboard(product)}
                checked={motherboard && product.name == motherboard.name}
                />
            </>
          ))}
      </ScrollWheelContainer>
          {notSelected?.includes("Motherboard") &&
            <h6 className="errors">Please select a motherboard</h6>
          }
          {incompatible.includes("Motherboard") &&
            <h6 className="errors">Motherboard is not compatible with selected CPU</h6>
          }
      <Container className="text-center p-5">
        <Button onClick={handleForm} className="form-button" size="lg">
          Submit
        </Button>
      </Container>
      {complete &&
        <Notification message={`Selected items are compatible with each other.`} onClose={handleClose} />
      }
    </div>
  );
};

export default CompatibilityCheckerPage;
