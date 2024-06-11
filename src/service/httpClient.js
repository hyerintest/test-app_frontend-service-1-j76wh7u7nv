import Axios from 'axios';
import {isEmpty} from 'lodash-es';
import store from '../store/auth';

class HttpClient {
  static instance;
  axiosInstance;
  authToken;

  constructor() {
    this.axiosInstance = Axios.create({
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    this.axiosInstance.interceptors.request.use(request => this.requestHandler(request));
    this.axiosInstance.interceptors.response.use(response => this.responseHandler(response),
        async error => {
          if (error.response && (error.response.status === 401)) {
            console.log('401')
          }
          throw error;
        });
  }

  requestHandler = async (request) => {
    let idToken = store.getters.authToken;
    if (!isEmpty(idToken)) {
      request.headers[process.env.VUE_APP_AUTH_TOKEN_HEADER_KEY] = idToken;
    }
    return request;
  };

  responseHandler = async (response) => {
    return response;
  };

  static getInstance = () => {
    if ((HttpClient.instance === null) || (HttpClient.instance === undefined) || !(HttpClient.instance instanceof HttpClient)) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance.axiosInstance;
  }
}

export default HttpClient.getInstance();


