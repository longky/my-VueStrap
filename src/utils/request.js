 
import { getToken } from './auth'

function toUni(str) {
  str=str.replace(/'/ig,"quot;").replace(/\+/ig,"add;");
  return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
}
// create an axios instance
const service = axios.create({
  //baseURL: process.env.BASE_API, // api的base_url
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // request timeout
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

 
// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent,验证只针对非信任站点
 
  config.headers['X-Token'] = "123456" // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  Object.assign(config.headers, { 'token': "123456" })


  if(config.params&&config.params.sql1){
     config.params.sql1=toUni(config.params.sql1);
  }
  return config
}, function(error){
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  function(response) {
    return response},
 
  function(error){
    console.log('err' + error)// for debug
    return Promise.reject(error)
  })

export default service
