// import React, { useEffect, useState } from "react";
// import { Destination } from "../../data/Type";
// import DestinationDetails from "../../components/destinations/DestinationDetails";
// // const destination: Destination = {
// //     id: 1,
// //     name: "Paris",
// //     description: "The city of love and lights.",
// //     image: "https://example.com/paris.jpg",
// //     bestTimeToVisit: "Spring",
// //     weatherConditions: "Temperate",
// //     nearestCity: "Paris",
// //     distanceFromCapital: 0,
// //   };
  
// //   const blogs: Blog[] = [
// //     {
// //       id: 1,
// //       title: "Top 10 Things to Do in Paris",
// //       description: "Explore the best attractions in Paris.",
// //       blogLink: "https://example.com/blog/paris",
// //       imageLink: "https://example.com/blog/paris.jpg",
// //     },
// //   ];
  
// //   const reviews: Review[] = [
// //     {
// //       id: 1,
// //       rating: 5,
// //       comment: "Amazing place!",
// //       reviewDate: "2023-10-01",
// //     },
// //   ];
  
// //   const relatedDestinations: Destination[] = [
// //     {
// //       id: 2,
// //       name: "Versailles",
// //       description: "The famous palace near Paris.",
// //       image: "https://example.com/versailles.jpg",
// //       bestTimeToVisit: "Spring",
// //       weatherConditions: "Temperate",
// //       nearestCity: "Paris",
// //       distanceFromCapital: 20,
// //     },
// //   ];
  
// //   const popularDestinations: Destination[] = [
// //     {
// //       id: 3,
// //       name: "Rome",
// //       description: "The eternal city.",
// //       image: "https://example.com/rome.jpg",
// //       bestTimeToVisit: "Spring",
// //       weatherConditions: "Temperate",
// //       nearestCity: "Rome",
// //       distanceFromCapital: 0,
// //     },
// //   ];



// const DetailHome = () => {
//     const [destination, setDestination] = useState<Destination | null>(null);


//     const destinationId = 1; // Replace with dynamic ID (e.g., from URL params)

//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         // Fetch destination details
//         const destinationData = await fetchData<Destination>(
//           `/api/destinations/${destinationId}`
//         );
//         setDestination(destinationData);

//         // // Fetch related blogs
//         // const blogsData = await fetchData<Blog[]>(
//         //   `/api/destinations/${destinationId}/blogs`
//         // );
//         // setBlogs(blogsData);

//         // Fetch related reviews
//         // const reviewsData = await fetchData<Review[]>(
//         //   `/api/destinations/${destinationId}/reviews`
//         // );
//         // setReviews(reviewsData);

//         // Fetch related destinations
//         // const relatedDestinationsData = await fetchData<Destination[]>(
//         //   `/api/destinations/${destinationId}/related`
//         // );
//         // setRelatedDestinations(relatedDestinationsData);

//         // Fetch popular destinations
//         // const popularDestinationsData = await fetchData<Destination[]>(
//         //   `/api/destinations/popular`
//         // );
//         // setPopularDestinations(popularDestinationsData);
      
//     } catch (err) {
//         setError(err instanceof Error ? err.message : "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllData();
//   }, [destinationId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!destination) return <div>Destination not found!</div>;


//   return (
//     <div>
//         <DestinationDetails destination={destination} />
//     </div>
//   )
// }

// export default DetailHome