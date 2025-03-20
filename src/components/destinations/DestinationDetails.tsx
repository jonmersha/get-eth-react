// import React from "react";
// interface Destination {
//     id: number;
//     name: string;
//     description: string;
//     image: string;
//     bestTimeToVisit: string;
//     weatherConditions: string;
//     nearestCity: string;
//     distanceFromCapital: number;
//   }
//   interface DestinationDetailsProps {
//     destination: Destination;
//   }
// const DestinationDetails:React.FC<DestinationDetailsProps> = ({ destination }) => {
//   return (
//     <div className="container mt-5">
//       <div className="card shadow">
//         <img
//           src={destination.image}
//           alt={destination.name}
//           className="card-img-top"
//         />
//         <div className="card-body">
//           <h1 className="card-title display-4">{destination.name}</h1>
//           <p className="card-text lead">{destination.description}</p>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">
//               <strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}
//             </li>
//             <li className="list-group-item">
//               <strong>Weather:</strong> {destination.weatherConditions}
//             </li>
//             <li className="list-group-item">
//               <strong>Nearest City:</strong> {destination.nearestCity}
//             </li>
//             <li className="list-group-item">
//               <strong>Distance from Capital:</strong> {destination.distanceFromCapital} km
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationDetails;


import React from "react";
import Like from "../Like";

const DestinationDetails: React.FC = () => {
  const handleLike = (liked: boolean) => {
    console.log(liked ? "Liked!" : "Unliked!");
    // You can send an API request here to update the like status on the server
  };

  return (
    <div className="destination-details">
      <img
        src="https://via.placeholder.com/800x400"
        alt="Eiffel Tower"
        className="img-fluid"/>
      <h1>Eiffel Tower</h1>
      <p>The iconic tower in Paris.</p>
      <Like initialLikes={42} onLike={handleLike} />
    </div>
  );
};

export default DestinationDetails;