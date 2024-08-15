import React from 'react';
import { Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <div className="hero text-center">
      <div className="hero-content">
        <h1>Accurate Real Estate Price Prediction in Dubai</h1>
        <p>Get an AI-driven valuation of your property and understand the factors that determine its price</p>
        <Button variant="primary" size="lg">Try for Free</Button>
      </div>
    </div>
  );
};

export default Hero;
