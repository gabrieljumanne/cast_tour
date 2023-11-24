const tips = [
  {
    id: 1, 
    title: "Get travel insurance",
    description: "Purchase a comprehensive travel insurance plan to protect against any mishaps."
  },
  {
    id: 2,
    title: "Pack light",
    description: "Only bring essentials in your luggage to avoid feeling bogged down."
  },
  {
    id: 3,
    title: "Leave copy of passport",
    description: "Give a copy of your passport to someone at home in case it gets lost or stolen."
  },
  {
    id: 4,
    title: "Get travel adaptor",
    description: "Bring a universal travel adaptor to charge devices and work with different outlets."
  },
  {  
    id: 5,
    title: "Pre-book activities",
    description: "Reserve spots for top tours and activities early to guarantee availability."
  }
];

export default function TravelTips() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {tips.map(tip => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TipCard(props) {

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
      <h3 className="font-semibold text-lg mb-3">{props.tip.title}</h3>  
      <p className="text-gray-600">{props.tip.description}</p>
    </div>
  );
}