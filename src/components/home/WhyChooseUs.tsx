import leImage from './../../image/le.png'; // Local Expertise Icon
import stlImage from './../../image/stl.png'; // Sustainable Travel Icon
import csImage from './../../image/cs.png'; // Customized Itineraries Icon
import smImage from './../../image/sm.png'; // Small Group Tours Icon

const WhyChooseUs = () => {
  // Array of card data
  const cards = [
    {
      id: 1,
      image: leImage,
      alt: 'Local Expertise Icon',
      title: 'Local Expertise',
      description: 'Our team has deep knowledge of Ethiopia\'s history, culture, and landscapes.',
    },
    {
      id: 2,
      image: stlImage,
      alt: 'Sustainable Travel Icon',
      title: 'Sustainable Travel',
      description: 'We are committed to eco-friendly and responsible tourism practices.',
    },
    {
      id: 3,
      image: csImage,
      alt: 'Customized Itineraries Icon',
      title: 'Customized Itineraries',
      description: 'We tailor tours to match your interests and preferences.',
    },
    {
      id: 4,
      image: smImage,
      alt: 'Small Group Tours Icon',
      title: 'Small Group Tours',
      description: 'Enjoy personalized experiences with small group sizes.',
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Us?</h2>
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-3" key={card.id}>
              <div className="card h-100 text-center p-4">
                <img src={card.image} alt={card.alt} className="card-icon mb-3" />
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;