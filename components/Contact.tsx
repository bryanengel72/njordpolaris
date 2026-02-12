import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [mathChallenge, setMathChallenge] = useState({ num1: 0, num2: 0, sum: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    generateChallenge();
  }, []);

  const generateChallenge = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setMathChallenge({ num1, num2, sum: num1 + num2 });
    setUserAnswer('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check honeypot (bots will likely fill this hidden field)
    if (honeypot) {
      console.warn('Bot detected via honeypot');
      return;
    }

    // Check math challenge
    if (parseInt(userAnswer) !== mathChallenge.sum) {
      setError('Incorrect math answer. Please try again.');
      generateChallenge();
      return;
    }

    // Success
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 py-12 md:py-24 flex items-center justify-center min-h-[60vh]">
        <div className="max-w-md w-full bg-white p-12 shadow-sm border border-gray-100 text-center reveal active">
          <div className="w-16 h-16 bg-[#001D00] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent</h2>
          <p className="text-gray-600 mb-8">
            Thank you for contacting Njord Polaris. Our team will review your request and get back to you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-[#001D00] font-semibold border-b-2 border-[#001D00] hover:pb-1 transition-all"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 md:py-24 reveal">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Contact Us</h2>

        <div className="w-full bg-white mb-12">
          <img
            src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/singapore_np.jpg"
            alt="Singapore Cityscape"
            className="w-full h-auto rounded-sm shadow-sm"
          />
        </div>

        <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 shadow-sm border border-gray-100">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Honeypot field - hidden from humans */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website_url"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2">First Name*</label>
                <input type="text" id="firstName" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                <input type="text" id="lastName" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2">Company Name*</label>
                <input type="text" id="companyName" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="website" className="text-sm font-medium text-gray-700 mb-2">Company Website</label>
                <input type="url" id="website" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Business Email*</label>
                <input type="email" id="email" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">Phone*</label>
                <input type="tel" id="phone" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Message*</label>
              <textarea id="message" rows={4} className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent resize-none" required></textarea>
            </div>

            {/* Human Verification */}
            <div className="pt-4 border-t border-gray-100">
              <label className="text-sm font-medium text-gray-700 block mb-4">Human Verification*</label>
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-900 font-medium">
                  What is {mathChallenge.num1} + {mathChallenge.num2}?
                </span>
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Answer"
                  className="w-24 border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-1 text-center bg-transparent"
                  required
                />
              </div>
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </div>

            <div className="pt-4">
              <button type="submit" className="bg-[#001D00] text-white px-10 py-3 uppercase tracking-wider text-sm font-semibold hover:bg-black transition-colors w-full md:w-auto">
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