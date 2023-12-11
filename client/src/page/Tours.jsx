import { useTheme } from "../hooks/useTheme";


const tours = [
  {
    id: 1,
    name: "Best of Serengeti",
    price: 1299,
    days: 7,
    image: "/images/tour-1.jpg",  
    description: "See all the highlights of Serengeti National Park on this comprehensive 7-day tour."
  },
  {
    id: 2,
    name: "Machu Picchu and Cusco", 
    price: 1099,
    days: 6,
    image: "/images/tour-2.jpg",
    description: "Explore ancient Incan ruins and culture on this 6-day tour of Peru's landmarks."
  },
  {
    id: 3,
    name: "Great Barrier Reef Diving",
    price: 799, 
    days: 4, 
    image: "/images/tour-3.jpg",
    description: "Scuba dive the Great Barrier Reef and relax on Australia's beautiful beaches." 
  },
];

export default function Tours() {
  const [darkTheme, toggleTheme] = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h2 className={`text-3xl ml-[100px] mt-[0px] font-semibold mb-6 ${darkTheme?'text-white':'text-black'}`}>Popular Destinations</h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">

        {tours.map(tour => (
          <TourCard key={tour.id} tour={tour} /> 
        ))}
      
      </div>
    </div>
  );

}

function TourCard(props) {
  const { tour } = props;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">

      <img src={tour.image} alt="" className="h-48 w-full object-cover" />
      
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{tour.name}</h3>  
        <p className="text-gray-500 text-sm mb-4">
          <span>{tour.days} Days</span>
          <span className="ml-3">from ${tour.price}</span>
        </p>

        <p className="text-gray-600 text-sm">{tour.description.substring(0, 100)}</p>
      </div>

    </div>
  );
}