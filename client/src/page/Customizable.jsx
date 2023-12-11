import React, { useState } from 'react';

const CustomizableTourPackages = () => {
  const [packageTitle, setPackageTitle] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [packagedescription, setPackageDescription] = useState('');
  const [packageDuration, setPackageDuration] = useState('');
  const [customize, setCustomize] =useState(false);


  const [showCustomizeForm, setShowCustomizeForm] = useState(false);
  const [selectedParks, setSelectedParks] = useState([]);
  const [selectedHotels, setSelectedHotels] = useState({});
  const [totalDays, setTotalDays] = useState(7); // Default total days



  // Generate random customizable tour packages data
  const generateRandomPackages = () => {
    const packages = [];
    for (let i = 1; i <= 6; i++) {
      const packageDetails = {
        id: i,
        title: `Custom Package ${i}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        duration: `${Math.floor(Math.random() * 10) + 3} days`,
        price: `${Math.floor(Math.random() * 1000) + 500}`,
        // Add more properties as needed
      };
      packages.push(packageDetails);
    }
    return packages;
  };

  const tourPackages = generateRandomPackages();
  const handleCustomizationSubmit= ()=>{

  }

  const customizeTour = ()=>{

  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold mb-6">Customizable Tour Packages</h2>

      {!customize?
      (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tourPackages.map((packageItem) => (
          <div key={packageItem.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 relative">
              <h3 className="text-xl font-semibold mb-2"
              
              >{packageItem.title}</h3>

              <button className="mt-4 md:absolute md:right-0 md:w-[40px] md:h-[20px] top-0 text-gray-500 hover:bg-gray-600 hover:text-white bg-white font-semibold py-0 px-0 rounded"
                onClick={()=>{
                    setPackageTitle(packageItem.title);
                    setPackageDescription(packageItem.description);
                    setPackagePrice(packageItem.price);
                    setPackageDuration(packageDuration);
                    setCustomize(!customize);

                }}
              >
                set
              </button>
              <p className="text-gray-600 mb-4">{packageItem.description}</p>
              <p>
                <strong>Duration:</strong> {packageItem.duration}
              </p>
              <p>
                <strong>Price:</strong> ${packageItem.price}
              </p>
              {/* Add more package details as needed */}

              <button
                className="mt-4 bg-pink-700 shadow hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded"
              >Claim</button>
              
            </div>
          </div>
        ))}
      </div>):(
        <form onSubmit={handleCustomizationSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="parks" className="block text-sm font-medium text-gray-700 mb-1">
            Select Parks
          </label>
          <select
            id="parks"
            name="parks"
            onChange={(e) => {
              // Handle selected parks
              const selectedParks = Array.from(e.target.selectedOptions, (option) => option.value);
              setSelectedParks(selectedParks);
            }}
            multiple
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {/* Replace with actual park data */}
            <option value="1">Serengeti National Park</option>
            <option value="2">Great Barrier Reef</option>
            {/* Add more park options */}
          </select>
        </div>
      
        {/* Dropdowns for selecting hotels */}
        {selectedParks.map((parkId) => (
          <div key={parkId} className="mb-4">
            <label htmlFor={`hotels-${parkId}`} className="block text-sm font-medium text-gray-700 mb-1">
              Select Hotels for Park {parkId}
            </label>
            <select
              id={`hotels-${parkId}`}
              name={`hotels-${parkId}`}
              onChange={(e) => {
                // Handle selected hotels for each park
                const selected = Array.from(e.target.selectedOptions, (option) => option.value);
                setSelectedHotels((prev) => ({ ...prev, [parkId]: selected }));
              }}
              multiple
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {/* Replace with actual hotel data for the selected park */}
              <option value="1">Hotel A</option>
              <option value="2">Hotel B</option>
              {/* Add more hotel options */}
            </select>
          </div>
        ))}
      
        {/* Input for total number of days */}
        <div className="mb-4">
          <label htmlFor="totalDays" className="block text-sm font-medium text-gray-700 mb-1">
            Total Number of Days
          </label>
          <input
            type="number"
            id="totalDays"
            name="totalDays"
            value={totalDays}
            onChange={(e) => setTotalDays(e.target.value)}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      
        {/* Submit button */}
        <button
          type="button"
          className="bg-pink-700 hover:bg-pink-500 shadow text-white font-semibold py-2 px-4 rounded"
          onClick={()=>{setCustomize(!customize)}}
        >
          Submit
        </button>
      </form>
      
      )}
    </div>
  );
};

export default CustomizableTourPackages;
