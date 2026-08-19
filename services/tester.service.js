

export async function testerService(url, apikey) {
  try {
    const response = await fetch(url, {
       headers: {
        "x-rapidapi-key": apikey,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();

    // console.log(data);
    
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
