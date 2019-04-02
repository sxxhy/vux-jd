import Vue from 'vue'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
const baseUrl = 'http://192.168.2.128:8086/api/shop/'
const http = {
  get: function (url, params) {
    return new Promise((resolve,reject)=>{
      Vue.http.get(baseUrl + url).then(res=>{
        resolve(res.data)
      }).catch(error=>{
        reject(error)
      })
    })
  },
  post: function (url, params) {
    return new Promise((resolve, reject) => {
      Vue.http.post(baseUrl + url, params)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  load: function (url, params) {
    console.log(url, params)
    return new Promise((resolve, reject) => {
      // Object.assign(params)
      Vue.http.get(url)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
export default http
