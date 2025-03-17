import React from 'react';

const RegionCard = ({ region, onClick }) => {
  return (
    <div className="region-card h-100 shadow-sm" onClick={() => onClick(region)}>
      <img src={region.image} alt={region.name} className="region-image img-fluid" />
      <div className="p-3">
        <h3>{region.name}</h3>
        <p>{region.description}</p>
        <button className="btn btn-primary">Explore {region.name}</button>
      </div>
    </div>
  );
};

export default RegionCard;