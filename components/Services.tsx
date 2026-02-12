import React from 'react';

const Services: React.FC = () => {
  return (
    <div id="services" className="bg-white reveal">
      {/* Full-width Image */}
      <div className="w-full bg-white">
        <img
          src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/containers_np.jpg"
          alt="Logistics and Container Shipping"
          className="w-full h-auto block"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left">Our Services</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Marketing Column */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Marketing</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                As a leading marketer of physical commodities, we specialize in sourcing raw materials, industrial goods, and wholesale products, delivering them to customers worldwide. Our operations ensure seamless transportation from origin to destination, meeting the precise schedules, quality standards, and specifications required by our clients.
              </p>
              <p>
                We take pride in expanding market opportunities for our suppliers, creating unique demand and significantly broadening their sales reach through strategic partnerships with us. This collaborative approach distinguishes our suppliers in competitive markets.
              </p>
              <p>
                Our long-term vision underpins everything we do, fostering trust and reliability. Customers can depend on us to support their sustained growth, while suppliers benefit from a stable and thriving sales market.
              </p>
            </div>
          </div>

          {/* Suppliers Column */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Suppliers</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                We are committed to partnering with suppliers who share our dedication to sustainability and ethical practices. We establish rigorous expectations for environmental, social, and governance (ESG) performance, carefully selecting suppliers who align with our sustainability objectives.
              </p>
              <p>
                Our evaluation process prioritizes suppliers' commitment to worker safety, environmental protection through minimal or no pollution, respect for human rights, strict adherence to anti-child labor and anti-slavery policies, high ethical standards, and responsible management of waste sites, including landfills and tailings.
              </p>
              <p>
                We qualify suppliers based on three key pillars: integrity, consistency, and transparency. Integrity ensures suppliers comply with all applicable laws and uphold high social and environmental standards. Consistency guarantees reliable delivery of products. Transparency enables proactive problem-solving.
              </p>
            </div>
          </div>

          {/* Sustainability Column */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Sustainability</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Operating in over 70 countries, we engage with diverse approaches to managing current and future resources. Recognizing our shared responsibility to protect the planet, we are committed to preserving its resources for future generations. Our operations prioritize safety, effective impact management, and the promotion of sustainable, positive outcomes for both the environment and the communities we serve.
              </p>
              <p>
                We are dedicated to conducting business with integrity and ethical responsibility in every region we operate. Our commitment to ethical practices ensures we remain a trusted partner of choice. We strictly prohibit any involvement in criminal, fraudulent, or corrupt activities and do not knowingly support third parties in violating the law.
              </p>
              <p>
                All employees, directors, officers, and applicable contractors are required to adhere to our policies, procedures, and relevant laws. To uphold these standards, we provide regular training, including anti-bribery awareness, to foster a culture of compliance and accountability.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Services;