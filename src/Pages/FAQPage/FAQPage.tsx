import React from "react";
import "./FAQPage.css";
import { Col, Row } from "react-bootstrap";

const FAQPage = () => {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <Row className="g-0 justify-content-center">
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">
              1. What should I consider when buying a new PC?
            </h4>
            <h6 className="answer">
              When buying a new PC, consider the purpose (gaming, work, general
              use), the required specifications (CPU, RAM, storage, GPU), the
              operating system, budget, and future upgrade possibilities. Ensure
              it meets your current and near-future needs.
            </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">2. How much RAM do I need for my PC?</h4>
            <h6 className="answer">
              For general use and light multitasking, 8GB of RAM is usually
              sufficient. For gaming, creative work, or heavy multitasking, 16GB
              or more is recommended.
            </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">
              3. Is it cheaper to build a PC or buy a pre-built one?
            </h4>
            <h6 className="answer">
              Building a PC can be cheaper and allows for customization, but it
              requires time, effort, and some technical knowledge. Pre-built PCs
              offer convenience and often come with warranties and support but
              may be more expensive for equivalent specifications.
            </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">
              4. How do I choose the right CPU for my needs?
            </h4>
            <h6 className="answer">
              Choose a CPU based on your primary use case. For gaming, a higher
              clock speed and fewer cores are beneficial. For multitasking or
              professional work (video editing, 3D rendering), a CPU with more
              cores and threads is better. Check benchmarks and reviews for
              specific models.
            </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">
              5. What is the difference between SSD and HDD?
            </h4>
            <h6 className="answer">
              SSDs (Solid State Drives) are faster, more durable, and consume
              less power than HDDs (Hard Disk Drives). HDDs are cheaper and
              offer larger storage capacities. For best performance, use an SSD
              for your operating system and frequently used programs, and an HDD
              for bulk storage.
            </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">
              6. How important is the GPU for gaming?
            </h4>
            <h6 className="answer">
              The GPU (Graphics Processing Unit) is crucial for gaming
              performance, especially for modern, graphics-intensive games. A
              powerful GPU allows for higher resolutions, better graphics
              settings, and smoother gameplay. Research the recommended GPUs for
              the games you intend to play.
            </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">
              7. What should I look for in a motherboard?
            </h4>
            <h6 className="answer">
              When choosing a motherboard, consider the socket type
              (compatibility with your CPU), form factor (size), number of RAM
              slots, expansion slots (for GPUs and other cards), connectivity
              options (USB, Ethernet, Wi-Fi), and future upgrade potential.
            </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">
              8. How do I ensure my power supply unit (PSU) is sufficient?
            </h4>
            <h6 className="answer">
              Calculate your system's total power consumption and choose a PSU
              with a higher wattage to ensure stability and future upgrades.
              Look for a PSU with an 80 PLUS certification for efficiency and
              reliability. Use online PSU calculators for accurate estimates.
            </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">
              9. What are the benefits of liquid cooling versus air cooling?
            </h4>
            <h6 className="answer">
              Liquid cooling provides better thermal performance and can be
              quieter than air cooling, making it ideal for high-performance
              builds or overclocking. Air cooling is simpler, cheaper, and
              easier to install. Choose based on your cooling needs, budget, and
              comfort level with installation.
            </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="question-container">
            <h4 className="question">
              10. How can I ensure compatibility between PC parts?
            </h4>
            <h6 className="answer">
              To ensure compatibility, verify that the CPU fits the motherboard
              socket, RAM is supported by the motherboard, the PSU has enough
              power and appropriate connectors, and the case can accommodate the
              motherboard and other components. You could use our compatibility
              checker to easily verify if your selected parts will work together
              seamlessly.
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FAQPage;
