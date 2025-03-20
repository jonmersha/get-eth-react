// import  { SetStateAction, useState } from 'react';
// import RegionCard from '../../components/home/RegionCard ';
// import TouristSitesList from './TouristSitesList ';

// const DestinationsByRegion = () => {
//   // State to track the selected region
//   const [selectedRegion, setSelectedRegion] = useState(null);

//   // Data for regions and their tourist sites
//   const regions = [
//     {
//       id: 1,
//       name: 'Northern Ethiopia',
//       image: 'image/northern.jpg', // Adjust the path to your image
//       description: 'Explore the historical and cultural treasures of Northern Ethiopia.',
//       touristSites: [
//         'Lalibela Rock-Hewn Churches',
//         'Aksum Obelisks',
//         'Gondar Castles',
//         'Simien Mountains National Park',
//       ],
//     },
//     {
//       id: 2,
//       name: 'Eastern Ethiopia',
//       image: 'image/eastern.jpg', // Adjust the path to your image
//       description: 'Discover the unique landscapes and cultures of Eastern Ethiopia.',
//       touristSites: [
//         'Harar Jugol Wall',
//         'Danakil Depression',
//         'Awash National Park',
//         'Dire Dawa Railway Station',
//       ],
//     },
//     {
//       id: 3,
//       name: 'Southern Ethiopia',
//       image: 'image/southern.jpg', // Adjust the path to your image
//       description: 'Experience the diverse cultures and wildlife of Southern Ethiopia.',
//       touristSites: [
//         'Omo Valley Tribes',
//         'Mago National Park',
//         'Konso Cultural Landscape',
//         'Arba Minch Nechisar National Park',
//       ],
//     },
//   ];

//   // Function to handle region selection
//   const handleRegionClick = (region: SetStateAction<null>) => {
//     setSelectedRegion(region);
//   };

//   // Function to go back to the region list
//   const handleBackClick = () => {
//     setSelectedRegion(null);
//   };

//   return (
//     <section className="destinations-by-region py-5">
//       <div className="container">
//         <h2 className="text-center mb-5">Destinations by Region</h2>
//         {selectedRegion ? (
//           // Show detailed list of tourist sites for the selected region
//           <TouristSitesList region={selectedRegion} onBackClick={handleBackClick} />
//         ) : (
//           // Show list of regions
//           <div className="row">
//             {regions.map((region) => (
//               <div className="col-md-4 mb-4" key={region.id}>
//                 <RegionCard region={region} onClick={handleRegionClick} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default DestinationsByRegion;