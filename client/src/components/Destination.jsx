// Destinations.jsx

import { useState, useEffect } from 'react';

const destinations = [
  {
    id: 1,
    name: 'Serengeti National Park', 
    image: '/images/serengeti.jpg'
  },
  {  
    id: 2,
    name: 'Great Barrier Reef',
    image: '/images/barrier-reef.jpg'
  },
  {
    id: 3, 
    name: 'Machu Picchu', 
    image: '/images/machu-picchu.jpg'
  }
];

export default function Destinations() {


  // const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch destinations from API
    fetchDestinations()
    
  }, []);

  const fetchDestinations = ()=>{
    // setDestinations(destinations)
  }

  return (
    <div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {destinations.map(destination => (
            <DestinationCard 
              key={destination.id}
              destination={destination} 
            />
          ))}
        </div>
      </div>
    
    </div>
  );

}

// DestinationCard component to display each destination
function DestinationCard({ destination }) {
  return (
    <div className="group relative">
      <img 
        src={destination.image}
        alt={destination.name}  
        className="w-full h-56 object-cover rounded-lg"
      />

      <div className="relative p-4">
        <h3 className="text-sm font-medium">
          <a href={`destinations/${destination.id}`}>
            <span aria-hidden="true" className="absolute inset-0"></span>
            {destination.name}  
          </a>
        </h3>
      </div>
    </div>
  );
}