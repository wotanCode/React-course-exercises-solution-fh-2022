// your API KEY here
const API_KEY = 'APIKEY';

export const getGifs = async (category, apiKey = API_KEY) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=10`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
};
