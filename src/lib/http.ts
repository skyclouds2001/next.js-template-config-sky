import axios from 'axios'

const instance = axios.create({
  baseURL: 'http:localhost:8080',
  timeout: 10000,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => config,
  (error) => error
)

instance.interceptors.response.use(
  (result) => result,
  (error) => error
)

export default instance
