import React from 'react';

const TouristSitesList = ({ region, onBackClick }) => {
  return (
    <div className="tourist-sites-list">
      <h3 className="text-center mb-4">{region.name}</h3>
      <button className="btn btn-secondary mb-4" onClick={onBackClick}>
        &larr; Back to Regions
      </button>
      <ul className="list-group">
        {region.touristSites.map((site, index) => (
          <li key={index} className="list-group-item">
            {site}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouristSitesList;