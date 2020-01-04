import axios from 'axios';

// 请求前拦截
axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 请求响应拦截
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const ajax = async ({ method = 'get', url, data, params }) => {
  try {
    let config = {
      method,
      url,
      data,
      params
    };

    const { data: res } = await axios(config);

    if (res.success) return res.data === undefined ? res : res.data;

    return false;
  } catch (err) {
    return false;
  }
};

export default ajax;
