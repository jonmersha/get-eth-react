import React, { useState } from "react";

interface LikeProps {
  initialLikes: number; // Initial number of likes
  onLike: (liked: boolean) => void; // Callback function when the like state changes
}

const Like: React.FC<LikeProps> = ({ initialLikes, onLike }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(initialLikes);

  const handleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    setLikes((prevLikes) => (newLikedState ? prevLikes + 1 : prevLikes - 1));
    console.log("Calling onLike with:", newLikedState); // Debugging
    onLike(newLikedState); // Notify parent component of the like state change
  };

  return (
    <div className="like-component">
      <button
        onClick={handleLike}
        className={`like-button ${liked ? "liked" : ""}`}
      >
        {liked ? "❤️" : "🤍"} {likes} Likes
      </button>
    </div>
  );
};

export default Like;