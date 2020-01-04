import ajax from './ajax';
import api from './api';

const service = {};

api.forEach(({ fn, url, method }) => {
  service[fn] = ({
    data, // method为post的情况下使用data
    params // method为get的情况下使用params
  } = {}) => {
    return ajax({
      url,
      method,
      data,
      params
    });
  };
});

export default service;
