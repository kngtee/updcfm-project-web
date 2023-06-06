import axios from 'axios';

export const GetRequest = async (url, payload) => {
  try {
    const res = await axios.get(url, payload);
    const { status, data } = res;
    return { status, data };
  } catch (err) {
    console.log(err);
  }
};

export const PostRequest = async (url, payload, headers) => {
  try {
    console.log('before semding: ' + payload);
    const res = await axios.post(url, payload, headers);
    const { status, data } = res;
    return { status, data };
  } catch (err) {
    console.log(err);
  }
};
