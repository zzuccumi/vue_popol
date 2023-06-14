import axios from 'axios';
import apiConfig from '@/config/api.config';

const http = axios.create({
  baseURL: apiConfig.BaseUrl,
});

http.defaults.responseType = 'json';

function getSampleApi(no) {
  return http.get(`/api/v1/sample/${no}`);
}

function getTestSampleApi(no) {
  const response = {
    code : 200,
    resultData: {
      no : no,
      title : 'sample title',
      contents : 'sample content',
      createId : 'sample create id',
      createDt : '20220530',
      updateId : 'sample update id',
      updateDt : '20220531'
    }
  };
  return response;
}

export {
  getSampleApi,
  getTestSampleApi,
};
