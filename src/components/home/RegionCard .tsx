
interface Region {
  id: number;
  name: string;
  description: string;
  image: string;
  touristSitesCount: number;
  bestTimeToVisit: string;
  weatherConditions: string;
  popularAttractions: string[];
}

// Define the props for the RegionCard component
interface RegionCardProps {
  region: Region; // The region object
  onClick: () => void; // The onClick handler function
}
const RegionCard:React.FC<RegionCardProps>  = ({ region, onClick }) => {
  return (
    <div className="region-card h-100 shadow-sm" onClick={() => onClick()}>
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