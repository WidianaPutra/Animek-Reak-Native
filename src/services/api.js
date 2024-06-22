export const GetResponse = async (resources, query) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/${resources}?${query}`,
  );
  return await response.json();
};
