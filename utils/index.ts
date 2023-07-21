export async function fetchCars() {

  // Set the required headers for the API request
  const headers: HeadersInit = {
    'X-RapidAPI-Key': 'dd3fa560c0msha591887fa199100p1a211bjsn408a403f8ad4',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}