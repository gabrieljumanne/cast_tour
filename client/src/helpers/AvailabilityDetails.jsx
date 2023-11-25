
// const toggleAvailabilityModal = () => {
//     setShowAvailability(!showAvailability);
//   };
  
//   // Detailed information about room availability (to be shown when the button is clicked)
//   const AvailabilityDetails = ({ hotelName }) => {

//     // State to handle modal visibility
//     const [showAvailability, setShowAvailability] = useState(false);

//     // Function to toggle modal visibility
//     const toggleAvailabilityModal = () => {
//     setShowAvailability(!showAvailability);
//     };

//     // Simulated data for availability details
//     const availabilityInfo = {
//       availableRooms: 5,
//       roomType: 'Deluxe Room',
//       pricePerNight: 200,
//       // Add more availability-related data
//     };
  
//     return (
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
//         <div className="bg-white p-8 rounded-lg">
//           <h2 className="text-xl font-semibold mb-4">{hotelName} Availability</h2>
//           <p>
//             <strong>Available Rooms:</strong> {availabilityInfo.availableRooms}
//           </p>
//           <p>
//             <strong>Room Type:</strong> {availabilityInfo.roomType}
//           </p>
//           <p>
//             <strong>Price Per Night:</strong> ${availabilityInfo.pricePerNight}
//           </p>
//           {/* Additional availability-related information */}
//           {/* Add a button to claim the room */}
//           <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
//             Claim Room
//           </button>
//         </div>
//       </div>
//     );
//   };
  