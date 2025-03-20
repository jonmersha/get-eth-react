import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import images from '../image/harena.jpg';

interface Region {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  touristSitesCount: number;
  bestTimeToVisit: string;
  weatherConditions: string;
  popularAttractions: string[];
}

const regions: Region[] = [
  {
    id: 1,
    title: 'Northern Ethiopia',
    description: 'Explore the ancient history and stunning landscapes of Northern Ethiopia, home to the rock-hewn churches of Lalibela and the towering Simien Mountains.',
    imageUrl: images,
    touristSitesCount: 10,
    bestTimeToVisit: 'October to March',
    weatherConditions: 'Mild and dry',
    popularAttractions: ['Lalibela', 'Simien Mountains', 'Axum'],
  },
  {
    id: 2,
    title: 'Southern Ethiopia',
    description: 'Discover the diverse cultures and wildlife of Southern Ethiopia, including the Omo Valley tribes and the lush Bale Mountains.',
    imageUrl: images,
    touristSitesCount: 15,
    bestTimeToVisit: 'November to February',
    weatherConditions: 'Warm and humid',
    popularAttractions: ['Omo Valley', 'Bale Mountains', 'Lake Chamo'],
  },
  {
    id: 3,
    title: 'Afar Region',
    description: 'Visit the otherworldly landscapes of the Afar Region, including the Danakil Depression, one of the hottest and lowest places on Earth.',
    imageUrl: images,
    touristSitesCount: 8,
    bestTimeToVisit: 'November to February',
    weatherConditions: 'Extremely hot and dry',
    popularAttractions: ['Danakil Depression', 'Erta Ale Volcano', 'Lake Afrera'],
  },
  {
    id: 4,
    title: 'Omo Valley',
    description: 'Experience the rich cultural heritage of the Omo Valley, home to numerous indigenous tribes and stunning natural beauty.',
    imageUrl: images,
    touristSitesCount: 12,
    bestTimeToVisit: 'June to September',
    weatherConditions: 'Warm and dry',
    popularAttractions: ['Mursi Tribe', 'Hamer Tribe', 'Omo River'],
  },
  {
    id: 5,
    title: 'Other Regions',
    description: 'Explore the lesser-known but equally fascinating regions of Ethiopia, including the Rift Valley lakes and the historic city of Harar.',
    imageUrl: images,
    touristSitesCount: 5,
    bestTimeToVisit: 'Year-round',
    weatherConditions: 'Varies by region',
    popularAttractions: ['Harar', 'Rift Valley Lakes', 'Gonder'],
  },
];

const RegionList: React.FC = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleDetailClick = (id: number) => {
    navigate(`/region/${id}`);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Display only the first 4 regions initially
  const displayedRegions = showAll ? regions : regions.slice(0, 4);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Explore Ethiopia's Regions</h1>

      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>

      <div className="row">
        {displayedRegions.map((region) => (
          <div key={region.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src={region.imageUrl} alt={region.title} className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">{region.title}</h2>
                <p className="card-text">{region.description}</p>
                <div className="card-text">
                  <p><strong>Best Time to Visit:</strong> {region.bestTimeToVisit}</p>
                  <p><strong>Weather:</strong> {region.weatherConditions}</p>
                  <p><strong>Popular Attractions:</strong> {region.popularAttractions.join(', ')}</p>
                  <p><strong>Number of Tourist Sites:</strong> {region.touristSitesCount}</p>
                </div>
                <button className="btn btn-outline-primary" onClick={() => handleDetailClick(region.id)}>
                  Explore More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionList;