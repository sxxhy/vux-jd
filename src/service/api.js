import http from './http'
export default {
  getHome: async (id)=>{
    let url = `good/home/?id=${id}`
    return http.get(url)
  }
}
