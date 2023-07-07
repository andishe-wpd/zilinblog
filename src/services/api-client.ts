import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
  }
}

export default APIClient
