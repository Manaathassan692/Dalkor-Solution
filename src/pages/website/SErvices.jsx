import React from 'react';

const Services = () => {
  return <>
    <div className="bg-gray-100 py-10 px-4 md:px-8 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Our Services
      </h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-black mb-4">Prepaid Electricity</h3>
          <p className="text-gray-600">
            Recharge your electricity in real-time from your mobile device. Get notified before your balance runs out, so you’re always prepared.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-black mb-4">Postpaid Plans</h3>
          <p className="text-gray-600">
            Choose monthly billing plans with flexible options based on your usage. Ideal for users who prefer regular monthly payments.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-black mb-4">Smart Meter Integration</h3>
          <p className="text-gray-600">
            Easily integrate with smart electricity meters. Track your electricity usage and manage recharges from one convenient place.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-black mb-4">User Dashboard</h3>
          <p className="text-gray-600">
            Access a dashboard to view your usage history, remaining balance, and more. Manage settings and preferences from a single interface.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-black mb-4">Mobile Notifications</h3>
          <p className="text-gray-600">
            Receive notifications directly to your mobile when your balance is low, and reminders to recharge before power is disconnected.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-black mb-4">Customer Support</h3>
          <p className="text-gray-600">
            Our team is here to support you with any issues or questions. Access live support through the app for assistance anytime.
          </p>
        </div>
      </div>
    </div>
    </>

};

export default Services;
