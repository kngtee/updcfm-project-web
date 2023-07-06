import axios from 'axios';

export const GetRequest = async (url, headers) => {
  try {
    const res = await axios.get(url, headers);
    const { status, data } = res;
    return { status, data };
  } catch (err) {
    console.log();
    console.log(err);
    return { status: err.response.status || err.request.status };
  }
};

export const PostRequest = async (url, payload, headers) => {
  try {
    const res = await axios.post(url, payload, headers);
    const { status, data } = res;
    return { status, data };
  } catch (err) {
    return {
      status: err.response.status || err.request.status,
      error: err.response.data.result,
    };
  }
};
