import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double checking
    setError('');

    // Check honeypot (bots will likely fill this hidden field)
    if (honeypot) {
      console.warn('Bot detected via honeypot');
      return;
    }

    // Check math challenge
    console.log('Math Challenge:', { userAnswer, sum: mathChallenge.sum, type: typeof userAnswer });
    if (Number(userAnswer) !== mathChallenge.sum) {
      console.warn('Math validation failed');
      setError('Incorrect math answer. Please try again.');
      generateChallenge();
      return;
    }

    // Normalize website URL
    const form = e.target as HTMLFormElement;
    const websiteInput = form.elements.namedItem('website') as HTMLInputElement;
    if (websiteInput && websiteInput.value) {
      let url = websiteInput.value.trim();
      if (url && !/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
        websiteInput.value = url;
      }
    }

    try {
      setIsSubmitting(true);
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const contactUsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT_US;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !publicKey || (!templateId && !contactUsTemplateId)) {
        throw new Error('Missing EmailJS configuration. Check your .env.local file.');
      }

      const emailPromises = [];

      // Template 1 (e.g. Auto-Reply)
      // if (templateId) {
      //  emailPromises.push(
      //    emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
      //  );
      //}

      // Template 2 (e.g. Contact Us Notification)
      if (contactUsTemplateId) {
        emailPromises.push(
          emailjs.sendForm(serviceId, contactUsTemplateId, e.target as HTMLFormElement, publicKey)
        );
      }

      await Promise.all(emailPromises);

      // Success
      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      const errorMessage = error?.text || error?.message || 'Failed to send message. Please try again.';
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 pt-2 pb-8 md:pt-2 md:pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full">
            <div className="w-full bg-white mb-6">
              <img
                src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/singapore_np.jpeg"
                alt="Singapore Cityscape"
                className="w-full h-auto rounded-sm shadow-sm"
              />
            </div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            </div>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 bg-[#001D00] rounded-full flex items-center justify-center mb-6">
                <Check className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent</h3>
              <p className="text-gray-600">
                Thank you for contacting Njord Polaris. Our team will review your request and get back to you within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pt-2 pb-8 md:pt-2 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

        {/* Layout Container to force structure update */}
        <div className="flex flex-col w-full">
          {/* 1. Image Section */}
          <div className="w-full bg-white mb-6 order-1">
            <img
              src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/singapore_np.jpeg"
              alt="Singapore Cityscape"
              className="w-full h-auto rounded-sm shadow-sm"
            />
          </div>

          {/* 2. Header Section */}
          <div className="order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          </div>
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
                <input type="text" id="firstName" name="firstName" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                <input type="text" id="lastName" name="lastName" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2">Company Name*</label>
                <input type="text" id="companyName" name="companyName" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="website" className="text-sm font-medium text-gray-700 mb-2">Company Website</label>
                <input type="text" id="website" name="website" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Business Email*</label>
                <input type="email" id="email" name="email" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">Phone*</label>
                <input type="tel" id="phone" name="phone" className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent" required />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Message*</label>
              <textarea id="message" name="message" rows={4} className="border-b border-gray-300 focus:border-[#001D00] focus:outline-none py-2 transition-colors bg-transparent resize-none" required></textarea>
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
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#001D00] text-white px-10 py-3 uppercase tracking-wider text-sm font-semibold hover:bg-black transition-colors w-full md:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;