import React from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials py-5 text-white text-center">
      <h2 className="mb-4">What Our Users Say</h2>
      <Carousel>
        <Carousel.Item>
          <p>&quot;This tool helped me understand the real value of the property I was about to buy. Highly recommended!&quot;</p>
          <h4>John Doe</h4>
        </Carousel.Item>
        <Carousel.Item>
          <p>&quot;As a realtor, this tool has become indispensable in my daily work. It explains the pricing in a way my clients love.&quot;</p>
          <h4>Jane Smith</h4>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Testimonials;
