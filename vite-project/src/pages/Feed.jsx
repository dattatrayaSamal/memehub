import React, { useEffect, useState } from "react";
import apiClient from "../api/axiosConfig";

const Feed = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await apiClient.get("/memes");
        setMemes(response.data);
      } catch (error) {
        console.error("Failed to fetch memes:", error);
      }
    };
    fetchMemes();
  }, []);

  return (
    <div>
      <h2>Meme Feed</h2>
      {memes.map((meme) => (
        <div key={meme.id}>
          <img src={meme.imageUrl} alt={meme.caption} />
          <p>{meme.caption}</p>
          <p>Votes: {meme.votes}</p>
          <p>Published: {meme.publishTime}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
