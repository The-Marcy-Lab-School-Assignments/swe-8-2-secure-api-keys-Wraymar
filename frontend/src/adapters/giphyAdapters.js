import { handleFetch } from "./handleFetch.js";

const API_KEY = "How can I include this without exposing it to the public?";

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async () => {
  return await handleFetch(`/api/gifs`);
};

export const getGifsBySearch = async (searchTerm) => {};
