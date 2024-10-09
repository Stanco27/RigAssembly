import React from "react";
import "./GuidePage.css";
import step1 from "../../assets/Step1.png";
import step2 from "../../assets/Step2.png";
import step3 from "../../assets/Step3.png";
import step4 from "../../assets/Step4.png";
import step5 from "../../assets/Step5.png";

const GuidePage = () => {
  return (
    <div className="guide-container">
      <h1 className="guide-title">Guide</h1>
      <h6 className="mb-5">
        If you are struggling with our compatibility checker you could follow
        this comprehensive step-by-step guide.
      </h6>
      <h4>Step 1</h4>
      <h6 className="mb-4">Select your preferred processor.</h6>
      <img className="guide-image" src={step1} />
      <h4>Step 2</h4>
      <h6 className="mb-4">Select your preferred graphics card.</h6>
      <img className="guide-image" src={step2} />
      <h4>Step 3</h4>
      <h6 className="mb-4">Select your preferred power supply.</h6>
      <img className="guide-image" src={step3} />
      <h4>Step 4</h4>
      <h6 className="mb-4">Select your preferred motherboard.</h6>
      <img className="guide-image" src={step4} />
      <h4>Step 5</h4>
      <h6 className="mb-4">Click on the submit button.</h6>
      <img className="guide-image" src={step5} />
      <h6>
        After everything is done, the checker will tell you if everything is
        compatible with one another or if there certain items are incompatible.
      </h6>
    </div>
  );
};

export default GuidePage;
