const apiKey = import.meta.env.VITE_API_KEY;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const fetchData = async () => {
    const response = await fetch(apiBaseUrl,{
        method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },

    });
    if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      
  
    const data = await response.json();
    // Ensure the response contains the 'Data' key and it is an array
    if (!data.Data || !Array.isArray(data.Data)) {
        throw new Error("Invalid API response: Expected an array of products in the 'Data' key");
      }
    return data;
  };


export default fetchData;