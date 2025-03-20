
const VideoSection = () => {
  // Array of video data
  const videos = [
    {
      id: 1,
      src: 'https://www.youtube.com/embed/excYNB26fhs',
      title: 'Lalibela: The Rock-Hewn Churches',
      description: 'Discover the ancient churches of Lalibela, carved out of solid rock over 800 years ago.',
    },
    {
      id: 2,
      src: 'https://www.youtube.com/embed/xTvlR9bIXwM',
      title: 'Simien Mountains: A Trekker\'s Paradise',
      description: 'Experience the breathtaking landscapes and unique wildlife of the Simien Mountains.',
    },
    {
      id: 3,
      src: 'https://www.youtube.com/embed/G0wSzBbaMJA',
      title: 'Omo Valley: A Cultural Journey',
      description: 'Immerse yourself in the vibrant cultures and traditions of the Omo Valley tribes.',
    },
    {
      id: 4,
      src: 'https://www.youtube.com/embed/-i2Ulbyjffo',
      title: 'Addis Ababa: The Heart of Ethiopia',
      description: 'Explore the bustling capital city, rich in history, culture, and modern attractions.',
    },
  ];

  return (
    <section className="video-section">
      <div className="container">
        <h2 className="text-center mb-5">Explore Ethiopia Through Videos</h2>
        <div className="row">
          {videos.map((video) => (
            <div className="col-md-6 mb-4" key={video.id}>
              <div className="video-card h-100">
                <div className="video-container">
                  <iframe
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-content p-3">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;