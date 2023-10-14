import axios from 'axios';

export const getLocations = async () => {
  const response = await axios.get("https://3001-ohdoyoel-rokafclickback-4nlx9a00kq8.ws-us105.gitpod.io");
  return response.data;
};

export const getLocationById = async (id: number) => {
  const response = await axios.get(`https://3001-ohdoyoel-rokafclickback-4nlx9a00kq8.ws-us105.gitpod.io${id}`);
  return response.data;
};