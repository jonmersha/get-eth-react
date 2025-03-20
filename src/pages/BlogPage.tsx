import top5Image from '../image/top5.png'; // Adjust the path to your image
import smImage from '../image/sm.png'; // Adjust the path to your image
import gdImage from '../image/gd.png'; // Adjust the path to your image

const BlogPage = () => {
  // Array of blog data
  const blogs = [
    {
      id: 1,
      image: top5Image,
      alt: 'Top 5 Historical Sites',
      title: 'Top 5 Must-See Historical Sites in Ethiopia',
      description: 'Discover the ancient wonders of Ethiopia, from Lalibela to Aksum.',
    },
    {
      id: 2,
      image: smImage,
      alt: 'Simien Mountains Trekking Guide',
      title: 'The Ultimate Guide to Trekking in the Simien Mountains',
      description: 'Everything you need to know for an unforgettable trekking adventure.',
    },
    {
      id: 3,
      image: gdImage,
      alt: 'Ethiopian Cuisine',
      title: 'A Traveler’s Guide to Ethiopian Cuisine',
      description: 'Explore the flavors and dishes that make Ethiopian cuisine unique.',
    },
  ];

  return (
    <section className="blog-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Travel Blog</h2>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="blog-card h-100 shadow-sm">
                <img src={blog.image} alt={blog.alt} className="blog-image img-fluid" />
                <div className="p-3">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;