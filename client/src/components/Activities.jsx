// Activities.jsx

const activities = [
  {
    id: 1,
    title: 'Walking safari',
    image: '/images/walking-safari.jpg',
    destination: 'Serengeti National Park'
  },
  {
    id: 2,  
    title: 'Great Barrier Reef Diving',
    image: '/images/diving.jpg',
    destination: 'Great Barrier Reef'
  },
  {
    id: 3,
    title: 'Inca Trail Hike',
    image: '/images/inca-trail.jpg',
    destination: 'Machu Picchu' 
  }   
];

export default function Activities() {

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
        {activities.map(activity => (
          <ActivityCard 
            key={activity.id}
            activity={activity}  
          />
        ))}
      </div>
    </div>
  );

}

function ActivityCard(props) {

  const { activity } = props;

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg h-96 flex shadow-sm">
      <img 
        src={activity.image}
        alt=""
        className="w-full h-full object-cover rounded-lg"  
      />

      <div className="relative p-4">
        <h3 className="text-sm font-medium text-gray-900">
          {activity.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          {activity.destination}
        </p>
      </div>
    </div>
  );  
}