import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="bg-white py-12 md:py-24 reveal">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">About Us</h2>

        {/* Image */}
        <div className="w-full h-64 md:h-96 bg-gray-200 mb-12 overflow-hidden rounded-sm">
          <img
            src="https://picsum.photos/seed/njord_about/1920/1080"
            alt="Cityscape view of Manhattan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed text-lg">
          <div>
            <p className="mb-6">
              As a privately held company and a dynamic leader in the global commodities market, we maintain a
              streamlined structure to maximize operational efficiency and believe that strong supply chains are
              built on trust. Our commitment to sustainability, innovation, and collaboration drives us to deliver
              exceptional value to our suppliers and customers worldwide. By fostering strong partnerships, we
              create sustainable, forward-thinking solutions that meet the evolving needs of our stakeholders.
            </p>
          </div>
          <div>
            <p>
              Our purpose is to responsibly source the commodities we supply to advance everyday life. It is a part
              of a value chain, benefiting the growth of our suppliers and our customers, and only when everybody
              benefits from what we do, will we grow ourselves. In this, we combine the expertise of generations
              and of our diversified portfolio of products, to bring competitive advantages to our trading partners,
              and to support their own growth innovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;