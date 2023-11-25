import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    img: '/images/person1.jpg',
    name: 'Sarah Williams',
    quote:
      'I had the most incredible time on the Galapagos Cruise tour. The guides were so knowledgeable and made sure we had an unforgettable experience.',
  },
  {
    id: 2,
    img: '/images/person2.jpg',
    name: 'Noah Davis',
    quote:
      'The whole trip completely exceeded my expectations. Everything was nicely organized and the destinations themselves were breathtaking.',
  },
  {
    id: 3,
    img: '/images/person3.jpg',
    name: 'Emma Wilson',
    quote:
      'I enjoy planning my own adventures, but it was nice to kick back and let someone else handle all the details. Would highly recommend!',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="border rounded-lg border-gray-100 p-6 bg-gray-50 overflow-hidden cursor-pointer"
            >
              <img src={item.img} alt="" className="w-16 h-16 mb-4 rounded-full mx-auto" />
              <p className="text-gray-600 text-center mb-4">
                <span className="font-bold text-lg text-gray-900">{item.quote}</span>
              </p>
              <p className="text-center text-xl mb-4 font-medium text-gray-900">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
