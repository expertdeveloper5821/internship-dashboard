import axios, { AxiosInstance } from "axios";

const apiSevices: AxiosInstance = axios.create({
  baseURL: 'https://tg-auth-vhx0.onrender.com'
})

//API Operations
const apiServicesMethod = {
  get: (url: string, config: any) => apiSevices.get(url, config),
  post: (url: string, config: any) => apiSevices.post(url, config),
  put: (url: string, config: any) => apiSevices.put(url, config),
  delete: (url: string, config: any) => apiSevices.delete(url, config),
}

export default apiServicesMethod;