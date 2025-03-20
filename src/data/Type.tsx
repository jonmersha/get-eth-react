// Destination Interface
export interface Destination {
    id: number;
    name: string;
    description: string;
    image: string;
    bestTimeToVisit: string;
    weatherConditions: string;
    nearestCity: string;
    distanceFromCapital: number;
  }
  
  // Blog Interface
  export interface Blog {
    id: number;
    title: string;
    description: string;
    blogLink: string;
    imageLink: string;
  }
  
  // Review Interface
  export interface Review {
    id: number;
    rating: number;
    comment: string;
    reviewDate: string;
  }

 export interface Region {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    bestTimeToVisit: string;
    weatherConditions: string;
    popularAttractions: string[];
   // sites: Site[];
    relatedBlogs: Blog[];
  }