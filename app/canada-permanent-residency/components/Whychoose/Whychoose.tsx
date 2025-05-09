'use client';
import React from 'react';
import { FaHandsHelping, FaGlobeAmericas, FaChartLine } from 'react-icons/fa';

const WhyChooseVJC = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
          Why Choose <span className="text-orange-500">VJC</span> for Canada PR Visa?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover the benefits of choosing VJC Overseas to guide your journey to Canadian Permanent Residency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
            <FaHandsHelping className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">
              Receive end-to-end support from experienced immigration consultants specialized in Canada PR processes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
            <FaGlobeAmericas className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Recognition</h3>
            <p className="text-gray-600 text-sm">
              Trusted by thousands of clients globally, VJC offers unmatched service quality and transparency.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
            <FaChartLine className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">High Success Rate</h3>
            <p className="text-gray-600 text-sm">
              We maintain a strong track record of successful PR visa applications for individuals and families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVJC;
