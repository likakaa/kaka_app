import axios from 'axios';
import qs from 'qs';
/* 
封装axios
使用方式：
async 函数名(info){
    const res = await $http.post('请求路径url',info);
     return res;
 },
 async 函数名(info){
    const res = await $http.get('请求路径url',info);
     return res;
 },
*/
class Http {
    constructor() {
      this.axiosInstance = axios.create({timeout: 30000});
      this.axiosInstance.interceptors.request.use((config) => {
        return config;
      },(error) =>{
        return Promise.reject(error)
      })
    }
    async get(url, params) {
      const res = await this.axiosInstance.get(url, {params:params});
      return res.data;
    }
    async post(url, params) {
      params = qs ? qs.stringify(params) : params;
      const res = await this.axiosInstance.post(url, params);
      return res.data;
    }
  }
  
  export  default new Http()