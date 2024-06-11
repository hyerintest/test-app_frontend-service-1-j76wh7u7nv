import httpClient from './httpClient';

export default {
  api: 'http://localhost:8000',
  login(reqParam) {
    return httpClient.post(`${window.location.origin}${config.APP_SUB_PATH}${process.env.VUE_APP_AUTH_SERVICE}/login`, reqParam);
  }
}
