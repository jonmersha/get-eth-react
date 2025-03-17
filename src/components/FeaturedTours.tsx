import React from 'react';
import smImage from './../image/sm.png';
import lalibelaImage from './../image/lalibela.png';
import cultImage from './../image/cult.png';

const FeaturedTours = () => {
  // Array of tour data with imported images
  const tours = [
    {
      id: 1,
      image: smImage,
      alt: 'Simien Mountains Trek',
      title: 'Simien Mountains Trek',
      duration: '5 Days',
      difficulty: 'Moderate Difficulty',
      description: 'Explore the stunning landscapes and unique wildlife of the Simien Mountains.',
    },
    {
      id: 2,
      image: lalibelaImage,
      alt: 'Historical Tour of Lalibela',
      title: 'Historical Tour of Lalibela',
      duration: '3 Days',
      difficulty: 'Easy Difficulty',
      description: 'Discover the ancient rock-hewn churches of Lalibela, a UNESCO World Heritage Site.',
    },
    {
      id: 3,
      image: cultImage,
      alt: 'Cultural Journey through the Omo Valley',
      title: 'Cultural Journey through the Omo Valley',
      duration: '7 Days',
      difficulty: 'Moderate Difficulty',
      description: 'Immerse yourself in the vibrant cultures and traditions of the Omo Valley tribes.',
    },
  ];

  return (
    <section className="featured-tours">
      <div className="container">
        <h2 className="text-center mb-5">Featured Tours</h2>
        <div className="row">
          {tours.map((tour) => (
            <div className="col-md-4" key={tour.id}>
              <div className="tour-card h-100 d-flex flex-column">
                <img src={tour.image} alt={tour.alt} className="tour-image" />
                <div className="p-3 flex-grow-1 d-flex flex-column">
                  <h3>{tour.title}</h3>
                  <p>
                    {tour.duration} | {tour.difficulty}
                  </p>
                  <p className="flex-grow-1">{tour.description}</p>
                  <button className="btn btn-primary mt-3 align-self-start">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;