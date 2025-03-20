import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import regions from '../image/harena.jpg';
import sites from '../image/sm.png';
import blog from '../image/le.png';

interface Region {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  bestTimeToVisit: string;
  weatherConditions: string;
  popularAttractions: string[];
  sites: Site[];
  relatedBlogs: Blog[];
}

interface Site {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  location: string;
  entranceFee: string;
  openingHours: string;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  blogLink: string;
  imageLink: string;
}

// Mock data for the region
const region: Region = {
  id: 1,
  title: 'Northern Ethiopia',
  description: 'Explore the ancient history and stunning landscapes of Northern Ethiopia, home to the rock-hewn churches of Lalibela and the towering Simien Mountains.',
  imageUrl: regions,
  bestTimeToVisit: 'October to March',
  weatherConditions: 'Mild and dry',
  popularAttractions: ['Lalibela', 'Simien Mountains', 'Axum'],
  sites: [
    {
      id: 1,
      name: 'Lalibela',
      description: 'Famous for its rock-hewn churches, a UNESCO World Heritage Site.',
      imageUrl: sites,
      location: 'Lalibela, Amhara Region',
      entranceFee: '$50 for foreigners',
      openingHours: '8:00 AM - 5:00 PM',
    },
    {
      id: 2,
      name: 'Simien Mountains',
      description: 'A stunning mountain range with unique wildlife and breathtaking views.',
      imageUrl: sites,
      location: 'Gondar, Amhara Region',
      entranceFee: '$30 for foreigners',
      openingHours: '6:00 AM - 6:00 PM',
    },
    {
      id: 3,
      name: 'Axum',
      description: 'An ancient city with obelisks and archaeological sites.',
      imageUrl: sites,
      location: 'Axum, Tigray Region',
      entranceFee: '$20 for foreigners',
      openingHours: '9:00 AM - 4:00 PM',
    },
  ],
  relatedBlogs: [
    {
      id: 1,
      title: 'Top 10 Things to Do in Northern Ethiopia',
      description: 'Discover the best attractions and activities in Northern Ethiopia.',
      blogLink: 'https://example.com/blog/northern-ethiopia',
      imageLink: blog,
    },
    {
      id: 2,
      title: 'A Guide to Lalibela',
      description: 'Everything you need to know about visiting Lalibela.',
      blogLink: 'https://example.com/blog/lalibela',
      imageLink: blog,
    },
  ],
};

const RegionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
  
console.log(id)
  // Fetch region data based on the ID (replace with API call in a real app)
  const selectedRegion = region;

  if (!selectedRegion) {
    return <div>Region not found!</div>;
  }

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Main Content (Left Side) */}
        <div className="col-md-7">
          {/* Region Image and Details */}
          <div className="row mb-4">
            <div className="col-md-6">
              <img
                src={selectedRegion.imageUrl}
                alt={selectedRegion.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h1 className="mb-3">{selectedRegion.title}</h1>
              <p className="text-muted">{selectedRegion.description}</p>
              <div className="mt-3">
                <p><strong>Best Time to Visit:</strong> {selectedRegion.bestTimeToVisit}</p>
                <p><strong>Weather:</strong> {selectedRegion.weatherConditions}</p>
                <p><strong>Popular Attractions:</strong> {selectedRegion.popularAttractions.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Sites in the Region */}
          <div className="mb-4">
            <h2>Sites in {selectedRegion.title}</h2>
            <div className="row">
              {selectedRegion.sites.map((site) => (
                <div key={site.id} className="col-md-6 mb-4">
                  <div className="card h-100">
                    <img
                      src={site.imageUrl}
                      alt={site.name}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h3 className="card-title">{site.name}</h3>
                      <p className="card-text">{site.description}</p>
                      <div className="mt-3">
                        <p><strong>Location:</strong> {site.location}</p>
                        <p><strong>Entrance Fee:</strong> {site.entranceFee}</p>
                        <p><strong>Opening Hours:</strong> {site.openingHours}</p>
                      </div>
                      <button
  className="btn btn-outline-primary mt-2"
  onClick={() => navigate(`/site/${site.id}`)} // Navigate to SiteDetail
>
  Learn More
</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Blogs (Right Side) */}
        <div className="col-md-5">
          <h2>Related Blogs</h2>
          <div className="list-group">
            {selectedRegion.relatedBlogs.map((blog) => (
              <div key={blog.id} className="list-group-item mb-3">
                <img
                  src={blog.imageLink}
                  alt={blog.title}
                  className="img-fluid rounded mb-2"
                />
                <h5 className="mb-1">{blog.title}</h5>
                <p className="mb-1">{blog.description}</p>
                <a
                  href={blog.blogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionDetails;