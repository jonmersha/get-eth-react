import smImage from "./../../image/sm.png";
import lalibelaImage from "./../../image/lalibela.png";
import cultImage from "./../../image/cult.png";
import herenaF from './../../image/harena.jpg'
//import './HeroSection.css'; // Import a CSS file for custom styles

const HeroSection = () => {
  // Define the carousel data inside the component
  const carouselData = [
    {
      id: 0,
      image: herenaF,
      alt: "Harenna Forest",
      title: "Discover the natual  Resources",
      description: "Adventure, Culture, and Unforgettable Memories",
      buttonText: "Explore Our Tours",
    },
    {
      id: 1,
      image: smImage,
      alt: "Discover Ethiopia",
      title: "Discover the Heart of Ethiopia",
      description: "Adventure, Culture, and Unforgettable Memories",
      buttonText: "Explore Our Tours",
    },
    {
      id: 2,
      image: lalibelaImage,
      alt: "Lalibela Churches",
      title: "Explore Ancient Wonders",
      description: "Discover the rock-hewn churches of Lalibela.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      image: cultImage,
      alt: "Omo Valley Culture",
      title: "Experience Vibrant Cultures",
      description: "Immerse yourself in the traditions of the Omo Valley.",
      buttonText: "Book Now",
    },
  ];

  return (
    // <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
    //   {/* Carousel Items */}
    //   <div className="carousel-inner">
    //     {carouselData.map((item, index) => (
    //       <div
    //         key={item.id}
    //         className={`carousel-item ${index === 0 ? 'active' : ''}`}
    //       >
    //         {/* Image with Custom Height and Width */}
    //         <img
    //           src={item.image}
    //           className="d-block w-100 carousel-image"
    //           alt={item.alt}
    //           loading="lazy"
    //         />

    //         {/* Carousel Indicators (Positioned Below the Image) */}
    //         <div className="carousel-indicators-custom">
    //           {carouselData.map((_, idx) => (
    //             <button
    //               key={idx}
    //               type="button"
    //               data-bs-target="#heroCarousel"
    //               data-bs-slide-to={idx}
    //               className={idx === index ? 'active' : ''}
    //               aria-current={idx === index ? 'true' : ''}
    //               aria-label={`Slide ${idx + 1}`}
    //             ></button>
    //           ))}
    //         </div>

    //         {/* Caption (Positioned Below the Indicators) */}
    //         <div className="carousel-caption-custom">
    //           <h1 className="fs-4">{item.title}</h1>
    //           <p className="fs-6">{item.description}</p>
    //           <button className="btn btn-primary btn-sm">{item.buttonText}</button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Carousel Controls */}
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#heroCarousel"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#heroCarousel"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
<div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {carouselData.map((item, index) => (
      <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
        {/* Image */}
        <img
          src={item.image}
          className="d-block w-100 carousel-image"
          alt={item.alt}
          loading="lazy"
        />

        {/* Indicators */}
        {/* <div className="carousel-indicators-custom">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={idx}
              className={idx === index ? 'active' : ''}
              aria-current={idx === index ? 'true' : ''}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div> */}

        {/* Caption */}
        <div className="carousel-caption-custom">
          <h1 className="fs-4">{item.title}</h1>
          <p className="fs-6">{item.description}</p>
          <button className="btn btn-primary btn-sm">{item.buttonText}</button>
        </div>
      </div>
    ))}
  </div>

  {/* Carousel Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 

);
};

export default HeroSection;