import lalibelaImage from './../../image/lalibela.png'; // Lalibela Image
import smImage from './../../image/sm.png'; // Simien Mountains Image
import cultImage from './../../image/cult.png'; // Omo Valley Image

const PopularDestinations = () => {
  // Array of destination data
  const destinations = [
    {
      id: 1,
      image: lalibelaImage,
      alt: 'Lalibela',
      title: 'Lalibela',
      description: 'Explore the ancient rock-hewn churches of Lalibela, a UNESCO World Heritage Site.',
    },
    {
      id: 2,
      image: smImage,
      alt: 'Simien Mountains',
      title: 'Simien Mountains',
      description: 'Trek through stunning landscapes and spot unique wildlife.',
    },
    {
      id: 3,
      image: cultImage,
      alt: 'Omo Valley',
      title: 'Omo Valley',
      description: 'Experience the vibrant cultures of the Omo Valley tribes.',
    },
  ];

  return (
    <section className="popular-destinations">
      <div className="container">
        <h2 className="text-center mb-5">Popular Destinations</h2>
        <div className="row">
          {destinations.map((destination) => (
            <div className="col-md-4" key={destination.id}>
              <div className="destination-card h-100">
                <img src={destination.image} alt={destination.alt} className="destination-image" />
                <div className="p-3">
                  <h3>{destination.title}</h3>
                  <p>{destination.description}</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;