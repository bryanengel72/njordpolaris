import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Contact Us</h2>

        <div className="w-full h-64 md:h-96 bg-gray-200 mb-12 overflow-hidden rounded-sm">
          <img 
            src="https://picsum.photos/seed/singapore/1920/1080" 
            alt="Singapore City Skyline" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2">First Name*</label>
                <input type="text" id="firstName" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                <input type="text" id="lastName" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2">Company Name*</label>
                <input type="text" id="companyName" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="website" className="text-sm font-medium text-gray-700 mb-2">Website</label>
                <input type="url" id="website" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="street" className="text-sm font-medium text-gray-700 mb-2">Street*</label>
                <input type="text" id="street" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="text-sm font-medium text-gray-700 mb-2">City*</label>
                <input type="text" id="city" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="postcode" className="text-sm font-medium text-gray-700 mb-2">Post Code*</label>
                <input type="text" id="postcode" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="country" className="text-sm font-medium text-gray-700 mb-2">Country*</label>
                <input type="text" id="country" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email*</label>
                <input type="email" id="email" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">Phone*</label>
                <input type="tel" id="phone" className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Message*</label>
              <textarea id="message" rows={4} className="border-b border-gray-300 focus:border-black focus:outline-none py-2 transition-colors bg-transparent resize-none" required></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="bg-gray-900 text-white px-10 py-3 uppercase tracking-wider text-sm font-semibold hover:bg-gray-700 transition-colors w-full md:w-auto">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;