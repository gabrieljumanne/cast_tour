// Destinations.jsx

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {fadeIn, staggerContainer,textContainer,textVariant, textVariant2, boxVariants} from '../utility/motion'
import {useTheme} from '../hooks/useTheme';


const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  const [darkTheme, toggleTheme] = useTheme();

const themClasses = darkTheme ? 'bg-[#1a1a1a] text-white' : 'bg-white text-black';

  useEffect(() => {
    // Simulating API call to fetch destinations
    const simulatedData = generateRandomDestinations();
    setDestinations(simulatedData);
  }, []);

  const generateRandomDestinations = () => {
    // Simulated destination data
    const destinations = [
      {
        id: 1,
        name: 'Serengeti National Park',
        image: '/images/serengeti.jpg',
      },
      {
        id: 2,
        name: 'Great Barrier Reef',
        image: '/images/barrier-reef.jpg',
      },
      {
        id: 3,
        name: 'Machu Picchu',
        image: '/images/machu-picchu.jpg',
      },
      // Add more destinations as needed
    ];
    return destinations;
  };

  return (
    <div 
      className={`${darkTheme?'bg-[#1a1a1a]':''} pt-[30px] mt-0 pb-[#10px] mb-[0px]`}
    >
      <h2 className={`text-3xl ml-[100px] mt-[0px] font-semibold mb-6 ${darkTheme?'text-white':'text-black'}`}>Popular Destinations</h2>
      <div className={`max-w-7xl border-[1px] border-black/40 rounded mb-[0px] mx-auto py-12 px-4 sm:px-6 lg:px-8 ${darkTheme?'bg-[#262626]':''}`}>
        <div className={`${darkTheme?'bg-[#262626]':''} grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={textContainer}
              whileInView='show'
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{destination.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// DestinationCard component to display each destination
// function DestinationCard({ destination }) {
//   return (
//     <div className="group relative">
//       <img 
//         src={destination.image}
//         alt={destination.name}  
//         className="w-full h-56 object-cover rounded-lg"
//       />

//       <div className="relative p-4">
//         <h3 className="text-sm font-medium">
//           <a href={`destinations/${destination.id}`}>
//             <span aria-hidden="true" className="absolute inset-0"></span>
//             {destination.name}  
//           </a>
//         </h3>
//       </div>
//     </div>
//   );
// }

export default Destinations