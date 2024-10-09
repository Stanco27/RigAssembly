import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="subtitle-container">
      <h1 className="subtitle">About Us</h1>
      <h6 className="text">
        Welcome to RigAssembly, your go-to source for premium PC parts and
        components! We aim to make building and upgrading PCs easy and enjoyable
        for tech enthusiasts, gamers, and professionals alike.
      </h6>
      </div>
<div>
  <div className="subtitle-container">
      <h4 className="subtitle">Our Mission</h4>
      <h6 className="text">
        Founded by passionate tech experts, RigAssembly is dedicated to
        providing high-quality hardware from leading brands. We ensure every
        product meets our high standards of performance and reliability.
      </h6>
  </div>
</div>
<div className="subtitle-container">
      <h4 className="subtitle">Compatibility Checker</h4>
      <h6 className="text">
        Our unique Compatibility Checker helps you build with confidence by
        verifying that your selected components work seamlessly together,
        eliminating the guesswork and frustration of incompatibility issues.
      </h6>
</div>
<div className="subtitle-container">
      <h4 className="subtitle">Commitment to You</h4>
      <h6 className="text">
        Customer satisfaction is our priority. We offer a user-friendly website,
        detailed product information, and responsive customer support to ensure
        you have the best shopping experience.
      </h6>
</div>
<div className="subtitle-container">
      <h4 className="subtitle">Join Us</h4>
      <h6 className="text">
        Join the RigAssembly community! Follow us on social media for the latest
        news, tips, and tutorials. Share your builds and connect with fellow PC
        enthusiasts.
      </h6>
</div>
      <h6 className="mb-5">
        Thank you for choosing RigAssembly. Let's build the perfect PC together!
      </h6>
    </div>
  );
};

export default AboutPage;
