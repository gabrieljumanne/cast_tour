import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const tips = [
  {
    id: 1,
    title: 'Get travel insurance',
    description: 'Purchase a comprehensive travel insurance plan to protect against any mishaps.',
  },
  {
    id: 2,
    title: 'Pack light',
    description: 'Only bring essentials in your luggage to avoid feeling bogged down.',
  },
  {
    id: 3,
    title: 'Leave copy of passport',
    description: 'Give a copy of your passport to someone at home in case it gets lost or stolen.',
  },
  {
    id: 4,
    title: 'Get travel adaptor',
    description: 'Bring a universal travel adaptor to charge devices and work with different outlets.',
  },
  {
    id: 5,
    title: 'Pre-book activities',
    description: 'Reserve spots for top tours and activities early to guarantee availability.',
  },
];

const TravelTips = () => {

  const [darkTheme, toggleTheme] = useTheme();

  return (
    <div className={`${darkTheme? 'bg-[#1a1a1a] text-white':'bg-gray-100'}  py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6">Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {tips.map((tip) => (
            <motion.div
              key={tip.id}
              whileHover={{ scale: 1.05 }}
              className={`${darkTheme?'bg-[#262626] border-[#333333]':'bg-white border-gray-100'}  rounded-lg border  p-4 shadow-sm overflow-hidden cursor-pointer`}
            >
              <h3 className="font-semibold text-lg mb-3">{tip.title}</h3>
              <p className="text-gray-500">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
