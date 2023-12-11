import { useState } from "react";

// Hotel component to display individual hotel details
const Hotel = ({ hotel }) => {
  const { name, image, description, rating, pricePerNight } = hotel;

  const [showAvailability, setShowAvailability] = useState(false);

  // Function to toggle modal visibility
  const toggleAvailabilityModal = () => {
    setShowAvailability(!showAvailability);
  };

  // Detailed information about room availability (to be shown when the button is clicked)
const AvailabilityDetails = ({ hotelName }) => {
  // Simulated data for availability details
  const availabilityInfo = {
    availableRooms: 5,
    roomType: 'Deluxe Room',
    pricePerNight: 200,
    // Add more availability-related data
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{hotelName} Availability</h2>
        <p>
          <strong>Available Rooms:</strong> {availabilityInfo.availableRooms}
        </p>
        <p>
          <strong>Room Type:</strong> {availabilityInfo.roomType}
        </p>
        <p>
          <strong>Price Per Night:</strong> ${availabilityInfo.pricePerNight}
        </p>
        {/* Additional availability-related information */}
        {/* Add a button to claim the room */}
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={toggleAvailabilityModal}
        >
          Claim Room
        </button>
      </div>
    </div>
  );
};


  return (
    <>{!showAvailability?(<div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover object-center" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-700 mb-2">
          <strong>Rating:</strong> {rating}
        </p>
        <p className="text-gray-700">
          <strong>Price per night:</strong> ${pricePerNight}
        </p>
        {/* Additional hotel details */}
        {/* Add a button for booking or checking availability */}
        <button className="mt-4 bg-pink-700 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded"
          onClick={toggleAvailabilityModal}
        >
          Check Availability
        </button>
      </div>
    </div>):
    (<AvailabilityDetails hotelName={name} />)}</>
  );
};

// HotelList component to display a list of hotels within a park
const HotelList = ({ hotels }) => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold mb-6">Most rated Hotels in Serengeti National Park</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Hotel key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

// Sample data for hotel listings in Serengeti National Park (replace with actual data)
const hotelsInSerengeti = [
  {
    id: 1,
    name: 'Safari Lodge',
    image: '/images/hotel1.jpg',
    description: 'Experience luxury and wildlife at Safari Lodge.',
    rating: 4.5,
    pricePerNight: 250,
    // Add more hotel details as needed
  },
  {
    id: 2,
    name: 'Savannah Resort',
    image: '/images/hotel2.jpg',
    description: 'Relax and enjoy the beauty of the savannah at Savannah Resort.',
    rating: 4.2,
    pricePerNight: 180,
    // Add more hotel details as needed
  },
  // Add more hotels for Serengeti National Park
];

// Usage of HotelList component
const App = () => {
  return <HotelList hotels={hotelsInSerengeti} />;
};

export default App;
