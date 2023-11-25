import React from 'react';
import { motion } from 'framer-motion';

const activities = [
  {
    id: 1,
    title: 'Walking safari',
    image: '/images/walking-safari.jpg',
    destination: 'Serengeti National Park',
  },
  {
    id: 2,
    title: 'Great Barrier Reef Diving',
    image: '/images/diving.jpg',
    destination: 'Great Barrier Reef',
  },
  {
    id: 3,
    title: 'Inca Trail Hike',
    image: '/images/inca-trail.jpg',
    destination: 'Machu Picchu',
  },
  // Add more activities as needed
];

const Activities = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold mb-6">Featured Activities</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white border border-gray-200 rounded-lg h-96 flex shadow-sm overflow-hidden cursor-pointer"
          >
            <motion.img
              src={activity.image}
              alt=""
              className="w-full h-3/4 object-cover rounded-lg transition-transform duration-300 transform-gpu group-hover:scale-110"
            />
            <div className="relative p-4">
              <motion.h3 className="text-sm font-medium text-gray-900">
                {activity.title}
              </motion.h3>
              <motion.p className="mt-1 text-sm text-gray-500">
                {activity.destination}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
