import axios from 'axios';

export const GetRequest = async (url) => {
  const res = await axios.get(url);
  const { status, data } = res;
  console.log(data);
  return { status, data };
};
