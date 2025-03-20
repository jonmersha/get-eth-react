import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sites from '../image/sm.png';
import blog from '../image/le.png';

interface Site {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  location: string;
  entranceFee: string;
  openingHours: string;
  relatedSites: RelatedSite[];
  relatedBlogs: Blog[];
}

interface RelatedSite {
  id: number;
  name: string;
  imageUrl: string;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  blogLink: string;
  imageLink: string;
}

const site: Site = {
  id: 1,
  name: 'Lalibela',
  description: 'Famous for its rock-hewn churches, a UNESCO World Heritage Site.',
  imageUrl: sites,
  location: 'Lalibela, Amhara Region',
  entranceFee: '$50 for foreigners',
  openingHours: '8:00 AM - 5:00 PM',
  relatedSites: [
    {
      id: 2,
      name: 'Simien Mountains',
      imageUrl: sites,
    },
    {
      id: 3,
      name: 'Axum',
      imageUrl: sites,
    },
    {
      id: 4,
      name: 'Gondar',
      imageUrl: sites,
    },
    {
      id: 5,
      name: 'Gondar',
      imageUrl: sites,
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

const SiteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  console.log(id);

  const selectedSite = site;

  if (!selectedSite) {
    return <div>Site not found!</div>;
  }

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-8 pe-4">
          <div className="row mb-0">
            <div className="col-md-12 p-3">
              <div
                id="siteCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ height: '500px' }}
              >
                {/* <div className="carousel-indicators">
                  {[1, 2, 3].map((index) => (
                   <button
                      key={index}
                      type="button"
                      data-bs-target="#siteCarousel"
                      data-bs-slide-to={index - 1}
                      className={index === 1 ? 'active' : ''}
                      aria-current={index === 1 ? 'true' : ''}
                      aria-label={`Slide ${index}`}
                    />
                  ))}
                </div> */}

                <div className="carousel-inner h-100">
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 1 ? 'active' : ''} h-100`}
                    >
                      <img
                        src={selectedSite.imageUrl}
                        alt={`${selectedSite.name} - Image ${index}`}
                        className="d-block w-100 h-100 rounded"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#siteCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#siteCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12">
              <h1>{selectedSite.name}</h1>
              <p className="text-muted">{selectedSite.description}</p>
              <div className="mt-2">
                <p><strong>Location:</strong> {selectedSite.location}</p>
                <p><strong>Entrance Fee:</strong> {selectedSite.entranceFee}</p>
                <p><strong>Opening Hours:</strong> {selectedSite.openingHours}</p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <h2>Related Sites</h2>
            {selectedSite.relatedSites.map((relatedSite) => (
              <div key={relatedSite.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={relatedSite.imageUrl}
                    alt={relatedSite.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{relatedSite.name}</h5>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => navigate(`/site/${relatedSite.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4 ps-4">
          <h2>Related Blogs</h2>
          <div className="list-group">
            {selectedSite.relatedBlogs.map((blog) => (
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

          {/* Contact Link */}
          <div className="mt-4">
            <h2>Contact Us</h2>
            <p>Have questions or need more information? Reach out to us!</p>
            <a href="/contact" className="btn btn-outline-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDetail;