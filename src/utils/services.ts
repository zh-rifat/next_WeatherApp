import axios from "axios";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getWeatherByLocationService = async (location: string) => {
  try {
    const params = {
      q: location,
      appid: API_KEY,
      units: "metric",
    };
    const response = await axios.get(BASE_URL + "/weather?", { params });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getForecastByLocationService = async (location: string) => {
  try {
    const params = {
      q: location,
      appid: API_KEY,
      units: "metric",
    };
    const response = await axios.get(BASE_URL + "/forecast?", { params });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getWeatherByCoordinatesService = async (lat: number, lon: number) => {
  try {
    const params = {
      lat,
      lon,
      appid: API_KEY,
      units: "metric",
    };
    const response = await axios.get(BASE_URL + "/weather?", { params });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getForecastByCoordinatesService = async (lat: number, lon: number) => {
  try {
    const params = {
      lat,
      lon,
      appid: API_KEY,
      units: "metric",
    };
    const response = await axios.get(BASE_URL + "/forecast?", { params });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};




export const getIconLink=(icon:string)=>{
  
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
